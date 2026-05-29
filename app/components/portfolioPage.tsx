import styles from '@/styles/main.module.css'
import Image from 'next/image'

export default function PortfolioPage() {
    return (
        <main className={`${styles.main} ${styles.main_e_sidebar}`}>
            <h2>Meu Portfólio</h2>
            <p>
                Aqui você encontra meus projetos de aprendizado feitos desde
                2023. As descrições são técnicas, breves e não marqueteiras.
            </p>

            <section>
                <h3>
                    <a
                        target='_blank'
                        href='https://sanallite-hololive.web.app'
                    >
                        Site de Fã - Hololive English
                    </a>
                </h3>
                <p>
                    <a
                        target='_blank'
                        href='https://github.com/sanallite/ProjetoHololive'
                    >
                        Visite o projeto no GiHub
                    </a>
                </p>

                <div className='linha-imagem-texto'>
                    <Image
                        src={'/portfolio/projetoHololive.png'}
                        alt='Captura de tela do Projeto Site de Fã - hololive English'
                        width={200}
                        height={100}
                    />
                    <div>
                        <p>
                            Projeto de site full stack feito em 2025 com o tema
                            de apresentar as Virtual YouTubers da hololive
                            English.
                        </p>
                        <p>
                            Site full stack sem o uso de frameworks JS e CSS,
                            com integrações a bancos de dados interno e externo
                            e uma API. Criação de elementos dinâmicamente,
                            estilização avançada e responsiva. Hospedagem
                            permanente e build e deploy com CI/CD.
                        </p>

                        <p>
                            Ferramentas: JavaScript, HTML, CSS, Vite, Firebase,
                            YouTube API, Github Actions, Figma
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <h3>
                    <a
                        target='_blank'
                        href='https://github.com/sanallite/Estudos-2025-js-ts/tree/main/React/app02_importandoImagens/src'
                    >
                        Importador automático de imagens para o bundler Vite
                    </a>
                </h3>

                <div>
                    <Image
                        src={'/portfolio/importadorVite.png'}
                        alt='Captura de tela do projeto de importação automática de imagens'
                        width={200}
                        height={100}
                    />
                    <div>
                        <p>
                            Hook React que descobre e importa dinamicamente
                            múltiplos arquivos de imagens de uma pasta usando
                            import.meta.glob, permitindo que o Vite as processe
                            e otimize automaticamente. Especialmente útil em
                            projetos com dezenas ou centenas de imagens que
                            precisam ser carregadas dinamicamente, evitando ter
                            que criar imports individuais manualmente e
                            garantindo que todas sejam otimizadas pelo bundler.
                        </p>

                        <p>Ferramentas: React, TypeScript, Claude</p>
                    </div>
                </div>
            </section>
            <section>
                <h3>
                    <a
                        target='_blank'
                        href='https://github.com/sanallite/UC16-PI-Projeto-Finansim'
                    >
                        App Finansim
                    </a>
                </h3>

                <div>
                    <Image
                        src={'/portfolio/projetoFinansim1.png'}
                        alt='Captura de tela da exbição da empresa no app Finansim'
                        width={50}
                        height={100}
                    />
                    <Image
                        src={'/portfolio/projetoFinansim2.png'}
                        alt='Captura de tela da exibição de compras no app Finansim'
                        width={50}
                        height={100}
                    />
                    <Image
                        src={'/portfolio/projetoFinansim3.png'}
                        alt='Captura de tela da exibição de boas vindas no app Finansim'
                        width={50}
                        height={100}
                    />
                    <div>
                        <p>
                            Projeto integrador do meu curso técnico no módulo de
                            desenvolvimento móvel, feito em 2024. O tema é um
                            aplicativo de finanças.
                        </p>

                        <p>
                            App React Native para Android com CRUD completo,
                            banco de dados noSQL na nuvem, gerenciamento de
                            sessão, conexão a API externa e navegação entre
                            telas.
                        </p>

                        <p>
                            Ferramentas: Expo, React Native, JavaScript,
                            Firebase, API Via CEP, Figma
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <h3>
                    <a
                        target='_blank'
                        href='https://github.com/sanallite/UC11-PI-Projeto-Quitanda/tree/master'
                    >
                        Site Quitandão Senac
                    </a>
                </h3>

                <div>
                    <Image
                        src={'/portfolio/projetoQuitanda.png'}
                        alt='Captura de tela do projeto Quitandão Senac'
                        width={200}
                        height={100}
                    />
                    <div>
                        <p>
                            Projeto Integrador do meu curso técnico no módulo
                            back-end, feito em 2024. O tema é administrar o
                            estoque de uma quitanda
                        </p>

                        <p>
                            Site dinâmico PHP com banco de dados SQL e CRUD
                            completo, paginação e gerenciamento básico de
                            sessão.
                        </p>

                        <p>
                            Ferramentas: PHP, MySQL/MariaDB, HTML, CSS,
                            JavaScript
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <h3>
                    <a
                        target='_blank'
                        href='https://github.com/sanallite/UC5-PI-Projeto-Zeroi'
                    >
                        Site Zérói
                    </a>
                </h3>

                <div className='linha-imagem-texto'>
                    <Image
                        src={'/portfolio/projetoZeroi.png'}
                        alt='Captura de tela do Projeto Zérói'
                        width={200}
                        height={100}
                    />

                    <div>
                        <p>
                            Meu primeiro projeto integrador do meu curso
                            técnico, no módulo front-end, feito em 2023. Site
                            estático com o tema de empresa de manutenção e
                            serviços residenciais para condomínios.
                        </p>
                        <p>
                            Objetivo: Marcação e estilização de um site bonito e
                            consistente.
                        </p>

                        <p>Ferramentas: HTML, CSS, Figma</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
