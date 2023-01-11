import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Família {props.familia}</h1>
            <Filho {...props} />
            <Filho nome="pedro" familia={props.familia} />
            <Filho nome="Joana" familia={props.familia}/>
            <Filho {...props} nome="Gabriel" />
        </div>
    )
}