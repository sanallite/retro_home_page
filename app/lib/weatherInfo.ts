import { cache } from 'react'
import { fetchWeatherApi } from 'openmeteo'
import type { Clima, RetornoGetCurrentWeather } from '@/types'

export const getCurrentWeather = cache( async (): Promise<RetornoGetCurrentWeather> => {
    // Código fornecido pela Open-Meteo para convêniencia.

    const params = {
        latitude: -25.4278,
        longitude: -49.2731,
        current: ['temperature_2m', 'weather_code', 'rain'],
        timezone: 'auto',
        forecast_days: 1,
    }
    const url = 'https://api.open-meteo.com/v1/forecast'
    const responses = await fetchWeatherApi(url, params)

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0]

    if ( response.latitude() === 0 && response.longitude() === 0 ) {
        console.log('Erro na obtenção das informações do clima.')

        return {
            temaClima: 'sol'
        }
    }

    // Attributes for timezone and location
    const latitude = response.latitude()
    const longitude = response.longitude()
    const elevation = response.elevation()
    const timezone = response.timezone()
    const timezoneAbbreviation = response.timezoneAbbreviation()
    const utcOffsetSeconds = response.utcOffsetSeconds()

    console.log(
        `\nCoordinates: ${latitude}°N ${longitude}°E`,
        `\nElevation: ${elevation}m asl`,
        `\nTimezone: ${timezone} ${timezoneAbbreviation}`,
        `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
    )

    const current = response.current()!

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
        current: {
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
            temperature_2m: current.variables(0)!.value(),
            weather_code: current.variables(1)!.value(),
            rain: current.variables(2)!.value()
        },
    }

    // The 'weatherData' object now contains a simple structure, with arrays of datetimes and weather information
    console.log(
        `\nCurrent time: ${weatherData.current.time}\n`,
        `\nCurrent temperature_2m: ${weatherData.current.temperature_2m}`,
        `\nCurrent weather_code: ${weatherData.current.weather_code}`,
        `\nMilimeters of rain: ${weatherData.current.rain}`
    )

    // Formatação dos dados recebidos.
    const temperaturaFormatada = weatherData.current.temperature_2m.toPrecision(2)

    // Filtrando os weather codes para definições mais gerais.
    const codigoClima = weatherData.current.weather_code

    // A condição definirá o icone exibido.
    let condicaoClima: 'ensolarado' | 'sol_nuvens' | 'nublado' | 'chovendo' | 'tempestade'

    // O tema que será renderizado
    let temaClima: Clima

    if ( codigoClima === 0 || codigoClima === 1 ) {
        condicaoClima = 'ensolarado'
        temaClima = 'sol'
    }

    else if ( codigoClima === 2 ) {
        condicaoClima = 'sol_nuvens'
        temaClima = 'sol'
    }

    else if ( codigoClima >= 3 && codigoClima <= 53) {
        condicaoClima = 'nublado'
        temaClima = 'chuva'
    }

    else if ( codigoClima >= 54 && codigoClima <= 81 ) {
        condicaoClima = 'chovendo'
        temaClima = 'chuva'
    }

    else {
        condicaoClima = 'tempestade'
        temaClima = 'chuva'
    }

    return {
        temperatura: temperaturaFormatada,
        condicaoClima: condicaoClima,
        temaClima: temaClima
    }
})

export const getWeatherComTimeout = async (): Promise<RetornoGetCurrentWeather> => {
    try {
        const timeout = new Promise<never>((_, reject) => 
            setTimeout(() => reject( new Error('Tempo esgotado para a request de clima.') ), 2000)
        )
        return await Promise.race([getCurrentWeather(), timeout])
    }
    catch (error) {
        console.warn(error)
        return { temaClima: 'sol' }
    }
}