import Image from 'next/image'
import styles from '@/styles/banner.module.css'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image
                src={'/sana_banner_yongdal.png'}
                fill
                alt='Imagem de banner mostrando Tsukumo Sana'
                style={{ objectFit: 'cover' }}
                sizes='(min-width: 1024px) 100vw, 50vw'
                loading='eager'
            />
            <h1 className={styles.titulo}>{"Sanallite's"} Retro Home Page</h1>
        </div>
    )
}
