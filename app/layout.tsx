import './globals.css'
import type { Metadata } from 'next'
import { getCurrentWeather } from '@/lib/weatherInfo'
import { ThemeProvider } from '@/context/themeContext'
import ThemedBody from '@/components/themedBody'
import VideoBackground from '@/components/videoBackground'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const revalidate = 900

export const metadata: Metadata = {
    title: 'Retro Home Page',
    description: "Sanallite's Retro Home Page - Site pessoal com muito estilo e o charme da internet antiga.",
    metadataBase: 'https://sanallite-retrohomepage.vercel.app',
    openGraph: {
        title: "Sanallite's Retro Home Page",
        description: 'Site pessoal com muito estilo e o charme da internet antiga.',
        url: 'https://sanallite-retrohomepage.vercel.app',
        siteName: "Sanallite's Retro Home Page",
        locale: 'pt_BR',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Sanallite's Retro Home Page",
        description: 'Site pessoal com muito estilo e o charme da internet antiga.',
    }
}

export default async function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const { temaClima } = await getCurrentWeather()

    return (
        <html lang='pt-br'>
            <ThemeProvider theme={temaClima}>
                <ThemedBody>
                    <VideoBackground />
                    {children}
                </ThemedBody>
            </ThemeProvider>
            <SpeedInsights />
        </html>
    )
}
