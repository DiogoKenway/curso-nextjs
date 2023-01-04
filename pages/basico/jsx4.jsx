export default function Jsx4() {
    const subtitulo = "Estou no JavaScript!"

    function entre(valor, min, max) {
        if (valor >= min && valor <= max) {
            return "SIM"
        } else {
            return "NÃO"
        }
    }

    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h3>{3 * 3}</h3>
            <h4>{Math.max(3, 30)}</h4>
            <h5>{entre(1, 5, 10)}</h5>
        </div>
    )
}