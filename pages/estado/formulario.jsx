import { useState } from "react"

export default function formulario() {

    const [valor, setValor] = useState("")

    function alterarInput() {
        setValor(valor + "!") 
    }

    return (
        <div style={{display: "flex",
            flexDirection: "column",
            width: "400px"}}>
            <input type="text" value={valor} 
                onChange={e => setValor(e.target.value)} />
                <span>{valor}</span>
            <button onClick={alterarInput}>Alterar</button>
        </div>
    )
}