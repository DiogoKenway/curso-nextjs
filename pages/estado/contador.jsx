import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function contador() {

    const [numero, setNumero] = useState(0)

    return (
        <div style={{ 
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px" }}>
            <h1>Contador</h1>
            <NumeroDisplay numero={numero}/>
            <div>
                <button onClick={() => setNumero(numero - 1)}>-</button>
                <button onClick={() => setNumero(numero + 1)}>+</button>
            </div>
        </div>
    )
}