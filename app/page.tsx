import Header from '@/components/header'
import CurrentWeather from '@/components/currentWeather'
import Banner from '@/components/banner'
import Main from '@/components/main'
import StartPage from '@/components/startPage'
import PortfolioPage from '@/components/portfolioPage'

export default function Home() {
    return (
        <>
            <Header weatherComponent={<CurrentWeather />} />
            <Banner />
            <Main
                startPage={<StartPage />}
                portfolioPage={<PortfolioPage />}
            ></Main>
        </>
    )
}
