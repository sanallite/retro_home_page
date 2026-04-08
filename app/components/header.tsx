'use client'

import clsx from 'clsx'
import styles from '@/styles/header.module.css'
import { useTema } from '@/context/themeContext'

export default function Header({componenteInfoClima}: {componenteInfoClima: React.ReactNode}) {
    const dataFormatada = new Date().toLocaleDateString('pt-br', {
        dateStyle: 'full',
    })

    const { tema, setTema } = useTema()

    return (
        <header
            className={clsx(styles.header, {
                [styles['tema-sol']]: tema === 'sol',
                [styles['tema-chuva']]: tema === 'chuva',
            })}
        >
            {componenteInfoClima}
            <p>Hoje é {dataFormatada}</p>

            <button
                onClick={() =>
                    setTema(
                        tema === 'sol' ? 'chuva' : 'sol'
                    )
                }
            >
                Alterar Tema
            </button>
        </header>
    )
}
