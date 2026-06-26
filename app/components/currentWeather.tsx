import { getCurrentWeather } from '@/lib/weatherInfo'
import Image from 'next/image'
import styles from '@/styles/header.module.css'

export default async function CurrentWeather() {
    const { condicaoClima, temperatura } = await getCurrentWeather()

    return (
        <>
            {condicaoClima ? (
                <span className={`${styles.textos} ${styles.texto_clima}`}>
                    Curitiba, {temperatura}°
                    <Image
                        src={`/clima/${condicaoClima}.png`}
                        alt={'Clima atual: ' + condicaoClima}
                        width={50}
                        height={50}
                        className={styles.icone_clima}
                    />
                </span>
            ) : (
                <span className={styles.texto_clima}>
                    Sem informações do clima atual
                </span>
            )}
        </>
    )
}
