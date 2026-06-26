'use client'

import styles from '@/styles/header.module.css'
import { useTema } from '@/context/themeContext'
import Image from 'next/image'

export default function Header({
    weatherComponent,
}: {
    weatherComponent: React.ReactNode
}) {
    const dataFormatada = new Date().toLocaleDateString('pt-br', {
        dateStyle: 'full',
    })

    const { tema, setTema } = useTema()

    const src =
        tema === 'chuva' ? '/clima/tema_sol.png' : '/clima/tema_chuva.png'

    return (
        <header className={styles.header}>
            {weatherComponent}
            <span className={styles.textos}>Hoje é {dataFormatada}</span>

            <button
                className={styles.botao_tema}
                onClick={() => setTema(tema === 'sol' ? 'chuva' : 'sol')}
            >
                <Image
                    src={src}
                    alt='Icone do botão para alterar o tema'
                    width={50}
                    height={50}
                />
            </button>
        </header>
    )
}
