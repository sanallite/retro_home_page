import { getCurrentWeather } from '@/lib/weatherInfo'
import Image from 'next/image'

export default async function InfoClima() {
    const { condicaoClima, temperatura } = await getCurrentWeather()

    return (
        <>
            {condicaoClima ? (
                <p>
                    Curitiba, {temperatura}°
                    <Image
                        src={`/clima/${condicaoClima}.png`}
                        alt={'Clima atual: ' + condicaoClima}
                        width={50}
                        height={50}
                    />
                </p>
            ) : (
                <p>Sem informações do clima atual</p>
            )}
        </>
    )
}
