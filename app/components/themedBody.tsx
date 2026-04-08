'use client'

import { useTema } from "@/context/themeContext";

export default function ThemedBody({children}: {children: React.ReactNode}) {
    const { tema: temaClima } = useTema()

    return (
        <body className={`tema-${temaClima}`}>
            {children}
        </body>
    )
}