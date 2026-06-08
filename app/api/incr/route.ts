// app/api/incr/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

export async function POST(req: NextRequest) {
    const ip = req.headers.get('x-forwarded-for') ?? '127.0.0.1'

    const buf = await crypto.subtle.digest(
        'SHA-256',
        new TextEncoder().encode(ip),
    )
    const hash = Array.from(new Uint8Array(buf))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('')

    /* Expira a cada 24 horas. */
    const isNew = await redis.set(`deduplicate:${hash}`, true, {
        nx: true,
        ex: 24 * 60 * 60,
    })

    /* Caso não for uma nova visualização, retorna apenas o número atual. */
    if (!isNew) {
        const visualizacoes =
            (await redis.get<number>('pageviews:pagina-principal')) ?? 0
        return NextResponse.json({ visualizacoes }, { status: 202 })
    }

    /* Incrementando e pegando o novo valor. */
    await redis.incr('pageviews:pagina-principal')
    const visualizacoes =
        (await redis.get<number>('pageviews:pagina-principal')) ?? 0

    return NextResponse.json({ visualizacoes }, { status: 200 })
}
