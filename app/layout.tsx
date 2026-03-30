import './globals.css'
import type { Metadata } from 'next'
import ThemeProvider from '@/app/components/themeProvider'

export const metadata: Metadata = {
    title: 'Retro Home Page',
    description: "Sanallite's Retro Home Page",
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='pt-br'>
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    )
}
