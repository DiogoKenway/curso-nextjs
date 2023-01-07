export default function Estilo(props) {

    const aplicarClasse = props.numero >= 0 ? "azul" : "vermelho";

    return (
        <div>
            <h1 style={ { 
                    background: props.numero >= 0 ? "#2D8" : "#D20259",
                    color: props.color,
                    textAlign: props.direita ? "right" : "left"
                 } }>
                Texto
            </h1>
            <h2 className={aplicarClasse}>
                h2
            </h2>  
        </div>
    )
}