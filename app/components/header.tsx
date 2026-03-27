export default function Header() {
    const dataFormatada = new Date().toLocaleDateString('pt-br', { dateStyle: 'full' })

    return (
        <header>
            <p>Hoje é {dataFormatada}</p>
        </header>
    )
}