import { useState } from "react";

export default function mouse(props) {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#333",
        color: "#FFF",
        height: "100vh",
        gap: "10px"
    }


    function quandoMouseMover(event) {
        setX(event.clientX);
        setY(event.clientY);
    }

    return (
        <div style={estilo} onMouseMove={quandoMouseMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}