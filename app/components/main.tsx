'use client'

import { useState } from 'react'
import styles from '@/styles/main.module.css'
import Sidebar from '@/components/sidebar'
import { PaginaAtiva, PropsMain } from '@/types'

export default function Main({ startPage, portfolioPage }: PropsMain) {
    const [paginaAtiva, setPaginaAtiva] = useState<PaginaAtiva>('início')

    return (
        <div className={styles.container}>
            <Sidebar activePage={paginaAtiva} setActivePage={setPaginaAtiva} />

            {paginaAtiva === 'início' ? startPage : portfolioPage}
        </div>
    )
}
