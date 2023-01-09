export default function Repeticao1() {

    const liastaAprovados = ["João", "Maria", "Ana", "Bia", "Carlos", "Daniel", "Laura"];

    function renderizarLista() {
        return (
            <>
                <li>Elemento #01</li>
                <li>Elemento #02</li>
                <li>Elemento #03</li>            
            </>
        )
    }

    return(
        <ul>
            {renderizarLista()}
        </ul>
    )
}