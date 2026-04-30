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
