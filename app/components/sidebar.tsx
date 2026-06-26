'use client'

import styles from '@/styles/main.module.css'
import { PropsSidebar } from '@/types'
import { galeria } from '@/lib/gifsData'
import Image from 'next/image'

export default function Sidebar({
    activePage,
    setActivePage,
    views,
}: PropsSidebar) {
    const visualizacoesFormatada = views.toString().padStart(3, '0')
    const digitos = visualizacoesFormatada.split('')

    return (
        <aside className={`${styles.sidebar} ${styles.main_e_sidebar}`}>
            <button
                className={`${styles.botoes_sidebar} ${activePage === 'início' ? `${styles.pagina_ativa}` : ''}`}
                onClick={() => setActivePage('início')}
            >
                Página Inicial
            </button>
            <button
                className={`${styles.botoes_sidebar} ${activePage === 'portfólio' ? `${styles.pagina_ativa}` : ''}`}
                onClick={() => setActivePage('portfólio')}
            >
                Portifólio
            </button>
            <button className={`${styles.botoes_sidebar}`}>
                <a target='_blank' href='https://nekoweb.org'>
                    Explore a Indie Web
                </a>
            </button>

            <button className={`${styles.botoes_sidebar}`}>
                <a
                    target='_blank'
                    href='https://github.com/sanallite/retro_home_page'
                >
                    Visite esse projeto no GitHub
                </a>
            </button>

            <div className={styles.contador}>
                <div className={styles.linha_contador}>
                    {digitos.map((digito, index) => (
                        <span key={index} className={styles.digito}>
                            {digito}
                        </span>
                    ))}
                </div>

                <span>Visualizações</span>
            </div>

            <div className={styles.galeria_gifs}>
                {galeria.map((gif, index) => (
                    <Image
                        key={index}
                        src={gif.src}
                        alt={gif.alt}
                        width={gif.width}
                        height={gif.height}
                        unoptimized
                        className={styles.cada_gif}
                    />
                ))}
            </div>

            <div className={styles.player}>
                <audio
                    src={'/somebody_khaim_youtube.mp3'}
                    preload='auto'
                    loop
                    controls
                />
            </div>

            <div className={styles.imagem_abaixo}>
                <Image
                    src={'/lazuli_coconut.png'}
                    alt='Arte da Lazuli Channel tomando água de coco.'
                    width={237}
                    height={360}
                />
            </div>
        </aside>
    )
}
