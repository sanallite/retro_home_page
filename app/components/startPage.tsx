import styles from '@/styles/main.module.css'

export default function StartPage() {
    return (
        <main className={`${styles.main} ${styles.main_e_sidebar}`}>
            <article>
                <h2>Bem vindos ao meu site!</h2>
                <hr />

                <p>
                    Olá, eu sou o Sanallite! Um desenvolvedor full stack (em
                    desenvolvimento) com afinidade em front-end e UI/UX e esse é
                    um projeto pessoal de site que tem como objetivo ser uma
                    mistura de site pessoal com portifólio profissional, usando
                    como inspiração os sites da época inicial da internet, e da
                    atual Indie Web, cheios de personalidade e estilo.
                </p>

                <h3>Quem está por trás da foto de anime?</h3>
                <hr />
                <p>
                    Meu nome é Márcio, sou um jovem paranaense que começou a
                    aprender desenvolvimento web em 2022. Concluí um curso
                    técnico de Informática para Internet em 2024, continuno me
                    aperfeiçoando e em breve iniciarei uma graduação na área. Já
                    o resto só sendo meu amigo pra saber. {':)'}
                </p>

                <h3>O que é a Indie Web?</h3>
                <hr />
                <p>
                    Além da sua{' '}
                    <a
                        target='_blank'
                        href='https://en.wikipedia.org/wiki/IndieWeb'
                    >
                        defnição formal
                    </a>
                    , a Indie Web é uma comunidade de pessoas que fazem seus
                    próprios sites colocando sua auto-expressão como um dos
                    príncipais objetivos, fugindo da corrente dos sites e redes
                    sociais corporativos, cada vez mais monetizados, sem graça e
                    artificiais. Por isso a maior inspiração de muitos nesse
                    meio são os sites do início da World Wide Web até os anos
                    2000, que exalavam criatividade. Os principais hosts de
                    sites independentes atualmente são{' '}
                    <a target='_blank' href='https://nekoweb.org'>
                        Nekoweb
                    </a>{' '}
                    e{' '}
                    <a target='_blank' href='https://neocities.org'>
                        Neocities
                    </a>
                    . Porém este site está hospedado pela{' '}
                    <a target='_blank' href='https://vercel.com/home'>
                        Vercel
                    </a>{' '}
                    para melhor compatibilidade com os recursos do Next.js.
                </p>

                <h3>
                    Ferramentas, bibliotecas e frameworks utilizadas nesse site
                </h3>
                <hr />

                <ul>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>OpenMeteo</li>
                    <li>ESLint</li>
                    <li>Prettier</li>
                    <li>Figma</li>
                </ul>

                <h3>Créditos</h3>
                <hr />
                <p>
                    Agradeço a todos que criaram os assets usados neste projeto.
                </p>

                <ul>
                    <li>
                        Banner da Tsukumo Sana:{' '}
                        <a
                            target='_blank'
                            href='https://yongdal.myportfolio.com'
                        >
                            Yongdal
                        </a>
                    </li>
                    <li>
                        Vídeo de fundo do tema dia:{' '}
                        <a
                            target='_blank'
                            href='https://www.reddit.com/r/PixelArt/comments/vdn9vk/sunny_afternoon/'
                        >
                            kmm625 no Reddit r/PixelArt
                        </a>
                    </li>
                    <li>
                        Vídeo de fundo do tema noite:{' '}
                        <a
                            target='_blank'
                            href='https://www.reddit.com/r/PixelArt/comments/v8ie3z/oc_rain_shelter/'
                        >
                            aleha_84 no Reddit r/PixelArt
                        </a>
                    </li>
                    <li>
                        Freepik no Flaticon pelos ícones do{' '}
                        <a
                            target='_blank'
                            href='https://www.flaticon.com/free-icon/sunrise_1146885?term=sunrise&page=1&position=32&origin=search&related_id=1146885'
                        >
                            tema sol
                        </a>
                        {', '}
                        <a
                            target='_blank'
                            href='https://www.flaticon.com/free-icon/protection_3301202?term=umbrella&page=2&position=44&origin=tag&related_id=3301202'
                        >
                            tema chuva
                        </a>
                        {', '}
                        <a
                            target='_blank'
                            href='https://www.flaticon.com/free-icon/storm_1146860?term=weather&page=1&position=17&origin=tag&related_id=1146860'
                        >
                            clima tempestade
                        </a>
                        {' e do '}
                        <a
                            target='_blank'
                            href='https://www.flaticon.com/free-icon/cloudy_3873753?term=cloudy&page=3&position=20&origin=tag&related_id=3873753'
                        >
                            clima nublado.
                        </a>
                    </li>
                    <li>
                        ADMS iCons no Flaticon pelo ícone do{' '}
                        <a
                            target='_blank'
                            href='https://www.flaticon.com/free-icon/sun_9744519?related_id=9744767&origin=search'
                        >
                            clima ensolarado
                        </a>
                    </li>
                    <li>
                        Aranagraphics no Flaticon pelo ícone do{' '}
                        <a
                            target='_blank'
                            href='https://www.flaticon.com/free-icon/sun_2969516?term=summer&page=1&position=6&origin=search&related_id=2969516'
                        >
                            tema sol
                        </a>
                    </li>
                    <li>
                        Design View no Flaticon pelo ícone do{' '}
                        <a
                            target='_blank'
                            href='https://www.flaticon.com/free-icon/weather_17189587?term=weather&page=1&position=29&origin=tag&related_id=17189587'
                        >
                            clima sol com nuvens
                        </a>
                    </li>
                    <li>
                        bqlqn no Flaticon pelo ícone do{' '}
                        <a
                            target='_blank'
                            href='https://www.flaticon.com/free-icon/cloudy_3313983?term=weather&page=2&position=51&origin=tag&related_id=3313983'
                        >
                            clima nublado
                        </a>
                    </li>
                    <li>
                        berkahicon no Flaticon pelo ícone do{' '}
                        <a
                            target='_blank'
                            href='https://www.flaticon.com/free-icon/rainy-day_4724094?term=weather&page=1&position=19&origin=tag&related_id=4724094'
                        >
                            clima chuvoso
                        </a>
                    </li>
                    <li>
                        Lazuli Ch. pela sua{' '}
                        <a
                            target='_blank'
                            href='https://x.com/l4zufish/status/1943341324012519665/photo/1'
                        >
                            arte tomando água de coco.
                        </a>
                    </li>
                    <li>
                        Gifs de botões encontrados em:{' '}
                        <a
                            target='_blank'
                            href='https://cyber.dabamos.de/88x31/'
                        >
                            The 88x31 Gif Collection
                        </a>
                        {' e '}
                        <a target='_blank' href='https://gifcities.org'>
                            GifCities
                        </a>
                    </li>
                </ul>
            </article>
        </main>
    )
}
