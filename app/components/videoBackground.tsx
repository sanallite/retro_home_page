'use client'

import { useTema } from '@/context/themeContext'

export default function VideoBackground() {
    const { tema } = useTema()

    const src =
        tema === 'sol'
            ? '/videos/summer_afternoon_kmm625_pixelart_reddit.mp4'
            : '/videos/rain_shelter_aleha_84_pixelart_reddit.mp4'

    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            key={src}
            className='video-fundo'
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1,
            }}
        >
            <source src={src} type='video/mp4' />
        </video>
    )
}
