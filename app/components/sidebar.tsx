import styles from '@/styles/main.module.css'
import { PropsSidebar } from '@/types'

export default function Sidebar({ setActivePage }: PropsSidebar) {
    return (
        <aside className={`${styles.sidebar} ${styles.main_e_sidebar}`}>
            <button onClick={() => setActivePage('início')}>
                Página Inicial
            </button>
            <button onClick={() => setActivePage('portfólio')}>
                Portifólio
            </button>
        </aside>
    )
}
