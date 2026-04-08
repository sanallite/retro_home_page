'use client'

import { useContext, createContext, useState } from 'react'
import type { Clima } from '@/types'

const ThemeContext = createContext<{
    tema: Clima
    setTema: (tema: Clima) => void
} | null>(null)

export function ThemeProvider({
    tema: temaInicial,
    children,
}: {
    tema: Clima
    children: React.ReactNode
}) {
    const [tema, setTema] = useState<Clima>(temaInicial)

    return (
        <ThemeContext.Provider value={{ tema, setTema }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTema() {
    const context = useContext(ThemeContext)
    if (!context)
        throw new Error('useTema deve ser usado dentro de ThemeProvider.')

    return context
}
