function elements(qtd) {
    return (
        qtd.map((el, index) => (
            <span ke={index}>{el},</span>
        ))
    )
}


export default function Lista1() {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div>
            {elements(list)}
        </div>
    )
}

