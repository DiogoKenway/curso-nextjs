import { useState } from "react"

export default function contador() {

    const [count, setCount] = useState(0)

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Contador</h1>
            <div>valor: {count}</div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}