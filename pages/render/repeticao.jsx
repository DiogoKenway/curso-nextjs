export default function Repeticao1() {

    const liastaAprovados = ["João", "Maria", "Ana", "Bia", "Carlos", "Daniel", "Laura"];

    function renderizarLista() {

        const itens = [];

        for (let i = 0; i < liastaAprovados.length; i++) {
            itens.push(<li key={i}>{liastaAprovados[i]}</li>)
            
        }
        
        return itens;
    }

    return(
        <ul>
            {renderizarLista()}
        </ul>
    )
}