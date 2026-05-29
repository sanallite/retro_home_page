import './globals.css'
import type { Metadata } from 'next'
import { getWeatherWithTimeout } from '@/lib/weatherInfo'
import { ThemeProvider } from '@/context/themeContext'
import ThemedBody from '@/components/themedBody'
import VideoBackground from '@/components/videoBackground'

export const metadata: Metadata = {
    title: 'Retro Home Page',
    description: "Sanallite's Retro Home Page",
}

export default async function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const { temaClima } = await getWeatherWithTimeout()

    return (
        <html lang='pt-br'>
            <ThemeProvider theme={temaClima}>
                <ThemedBody>
                    <VideoBackground />
                    {children}
                </ThemedBody>
            </ThemeProvider>
        </html>
    )
}
