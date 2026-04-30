'use client'

import Image from 'next/image'
import styles from '@/styles/banner.module.css'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image
                src={'/sana_banner.png'}
                fill
                priority
                alt='Imagem de banner mostrando Tsukumo Sana'
                style={{ objectFit: 'cover' }}
                sizes='(min-width: 1024px) 100vw, 50vw'
            />
            <h1 className={styles.title}>{"Sanallite's"} Retro Home Page</h1>
        </div>
    )
}
