'use client'

import { useState, useEffect, useRef } from 'react'
import styles from '@/styles/main.module.css'
import Sidebar from '@/components/sidebar'
import { PaginaAtiva, PropsMain } from '@/types'

export default function Main({ startPage, portfolioPage }: PropsMain) {
    const [paginaAtiva, setPaginaAtiva] = useState<PaginaAtiva>('início')
    const [visualizacoes, setVisualizacoes] = useState<number>(0)

    const visualizacaoReportada = useRef(false)

    useEffect(() => {
        if (visualizacaoReportada.current === true) return
        visualizacaoReportada.current = true

        fetch('/api/incr', { method: 'POST' })
            .then((res) => res.json())
            .then((data) => setVisualizacoes(data.visualizacoes))
            .catch((error) => {
                console.error('Erro com o contador de visualizações: ', error)
            })
    }, [])

    return (
        <div className={styles.container}>
            <Sidebar
                activePage={paginaAtiva}
                setActivePage={setPaginaAtiva}
                views={visualizacoes}
            />

            {paginaAtiva === 'início' ? startPage : portfolioPage}
        </div>
    )
}
