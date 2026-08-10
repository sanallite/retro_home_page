export type Clima = 'sol' | 'chuva'

export type CondicoesClima =
    | 'ensolarado'
    | 'noite_limpa'
    | 'sol_nuvens'
    | 'lua_nuvens'
    | 'nublado'
    | 'chovendo'
    | 'tempestade'

export type RetornoGetCurrentWeather = {
    temaClima: Clima
    temperatura?: string
    condicaoClima?: CondicoesClima
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
