import Titulo from "../../components/Titulo";

export default function usandoTitulo() {
    return (
        <>
            <Titulo 
                principal="Página de cadastro"
                secundario="Incluir, alterar e excluir coisas!"
            />
            <Titulo 
                principal="Página de login"
                secundario="Informe o seu email e senha!"
                pequeno
            />
        </>
    )
}