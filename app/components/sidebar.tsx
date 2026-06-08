import styles from '@/styles/main.module.css'
import { PropsSidebar } from '@/types'
import { galeria } from '@/lib/gifsData'
import Image from 'next/image'

export default function Sidebar({
    setActivePage,
    views,
}: PropsSidebar) {
    const visualizacoesFormatada = views.toString().padStart(3, '0')
    const digitos = visualizacoesFormatada.split('')

    return (
        <aside className={`${styles.sidebar} ${styles.main_e_sidebar}`}>
            <button onClick={() => setActivePage('início')}>
                Página Inicial
            </button>
            <button onClick={() => setActivePage('portfólio')}>
                Portifólio
            </button>
            <button>
                <a target='_blank' href='https://nekoweb.org'>
                    Explore a Indie Web
                </a>
            </button>

            <div className={styles.contador}>
                {digitos.map((digito, index) => (
                    <span key={index} className={styles.digito}>
                        {digito}
                    </span>
                ))}
                <span>Visualizações</span>
            </div>

            <div className={styles.container_gifs}>
                {galeria.map((gif, index) => (
                    <Image
                        key={index}
                        src={gif.src}
                        alt={gif.alt}
                        width={gif.width}
                        height={gif.height}
                        unoptimized
                    />
                ))}
            </div>

            <div>
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
