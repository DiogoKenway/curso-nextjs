import { useState } from "react";
import { mega } from '../../functions/mega';
import NumeroDisplay from "../../components/NumeroDisplay";

export default function megasena() {

    const [numeros, setNumeros] = useState(mega());

    const renderNumeros = () => (
        numeros.map(numero => <NumeroDisplay key={numero} numero={numero} />)
    )
    

    return (
        <div style={{display: "flex",
             justifyContent: "space-around",
             alignItems: "center",
             flexDirection: "column"}}>
            <h1>Mega Sena</h1>
            <div style={{ display: "flex", gap: "16px" }}>
                {renderNumeros()}
            </div>
            <input type="number" min={6} max={20} />
            <button onClick={() => setNumeros(mega())}>
                Gerar Aposta
            </button>
        </div>
    )
}