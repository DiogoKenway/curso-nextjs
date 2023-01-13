export default function Filho(props) {
    const frase = "passei no ENEM";
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={e => props.funcao(e)}>falar com o pai #01</button>
            <button onClick={() => props.funcao(frase, "nota: ", 8.6)}>falar com o pai #02</button>
        </div>
    )
}