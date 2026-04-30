import Header from '@/components/header'
import InfoClima from '@/components/infoClima'
import Banner from '@/components/banner'
import Sidebar from './components/sidebar'
import StartPage from './components/startPage'

export default function Home() {
    return (
        <>
            <Header componenteInfoClima={<InfoClima />} />
            <Banner />
            <div className='sidebar-main'>
                <Sidebar />
                <StartPage />
            </div>
        </>
    )
}
