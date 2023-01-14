import { useState } from "react";
import { mega } from '../../functions/mega';
import NumeroDisplay from "../../components/NumeroDisplay";

export default function megasena() {

    const [qtde, setQtde] = useState(6);
    const [numeros, setNumeros] = useState([]);

    const renderNumeros = () => (
        numeros.map(numero => <NumeroDisplay key={numero} numero={numero} />)
    )
    

    return (
        <div style={{display: "flex",
             alignItems: "center",
             flexDirection: "column"}}>
            <h1>Mega Sena</h1>
            <div style={{ display: "flex", 
                gap: "16px",
                flexWrap: "wrap" }}>
                {renderNumeros()}
            </div>
            <input type="number"
                min={6}
                max={20}
                value={qtde}
                onChange={e => setQtde(+e.target.value)} />
            <button onClick={() => setNumeros(mega(qtde))}>
                Gerar Aposta
            </button>
        </div>
    )
}