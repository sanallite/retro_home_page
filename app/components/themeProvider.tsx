'use client'
import { useState } from 'react'

export default function ThemeProvider({children}: Readonly<{children: React.ReactNode}>) {
    const [tema, setTema] = useState<'light' | 'dark'>('dark')

    return (
        <div className={`background ${tema}-background`}>
            <button onClick={() => setTema( t => t === 'light' ? 'dark' : 'light' )} >
                Alterar Tema
            </button>
            {children}
        </div>
    )
}