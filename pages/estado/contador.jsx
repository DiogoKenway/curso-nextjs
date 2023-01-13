import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function contador() {

    const [count, setCount] = useState(0)

    return (
        <div style={{ 
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px" }}>
            <h1>Contador</h1>
            <ContadorDisplay count={count}/>
            <div>
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    )
}