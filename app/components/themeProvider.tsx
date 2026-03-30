'use client'
import { useState } from 'react'

export default function ThemeProvider({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const [tema, setTema] = useState<'sol' | 'chuva'>('sol')

    return (
        <div className={`fundo tema-${tema}-fundo`}>
            <button
                onClick={() =>
                    setTema((temaAtual) =>
                        temaAtual === 'sol' ? 'chuva' : 'sol',
                    )
                }
            >
                Alterar Tema
            </button>
            {children}
        </div>
    )
}
