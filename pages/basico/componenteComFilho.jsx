import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilho() {
    return (
        <div>
            <Lista>
                <Item conteudo="item-01"/>
                <Item conteudo="item-02"/>
                <Item conteudo="item-03"/>
                <Item conteudo="item-04"/>
            </Lista>
        </div>
    )
}