import './globals.css'
import type { Metadata } from 'next'
import { getWeatherComTimeout } from '@/lib/weatherInfo'
import { ThemeProvider } from '@/context/themeContext'
import ThemedBody from '@/components/themedBody'

export const metadata: Metadata = {
    title: 'Retro Home Page',
    description: "Sanallite's Retro Home Page",
}

export default async function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const { temaClima } = await getWeatherComTimeout()

    return (
        <html lang='pt-br'>
            <ThemeProvider tema={ temaClima }>
                <ThemedBody>
                    {children}
                </ThemedBody>
            </ThemeProvider>
        </html>
    )
}
