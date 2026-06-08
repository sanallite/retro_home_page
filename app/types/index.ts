export type Clima = 'sol' | 'chuva'

export type RetornoGetCurrentWeather = {
    temaClima: Clima
    temperatura?: string
    condicaoClima?:
        | 'ensolarado'
        | 'sol_nuvens'
        | 'nublado'
        | 'chovendo'
        | 'tempestade'
}

export type PaginaAtiva = 'início' | 'portfólio'

export type PropsMain = {
    startPage: React.ReactNode
    portfolioPage: React.ReactNode
}

export type PropsSidebar = {
    activePage?: PaginaAtiva
    setActivePage: (pagina: PaginaAtiva) => void
    views: number
}

interface ObjetoImagem {
    src: string
    alt: string
    width: number
    height: number
}

export type GaleriaGifs = ObjetoImagem[]
