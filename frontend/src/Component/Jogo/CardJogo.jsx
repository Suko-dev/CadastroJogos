import React from 'react';
import '../Css/style.css'
import { Link } from 'react-router-dom'

const CardJogo = (props) => {

    const { nome, genero, concluido, id } = props.jogo
    const consol = props.jogo.console
    let check = "não"
    if (concluido === 1) {
        check = "sim"
    }
    //const [info, setinfo] = useState("")
    const deleteCard = async () => {
        if(!window.confirm(`Deseja realmente excluir o jogo ${nome}?`)) return;
        props.delete(id)
    }

    return (
        <div className="card card-jogo">
            <header className="card-header">
                <h1 className="card-header-title">
                    {nome}
                </h1>
            </header>
            <div className="card-content">
                <div className="content">
                    <p><strong>console:</strong> {consol}</p>
                    <p><strong>genero:</strong> {genero}</p>
                    <p><strong>concluído:</strong> {check}</p>
                    <br />
                </div>
            </div>
            <footer className="card-footer botton-col">
                <Link className="button is-info is-rounded fix-button-size is-small" to={`/jogo/${id}`}>Editar</Link>
                <button className="button is-danger is-rounded fix-button-size is-small" onClick={deleteCard}>Excluir</button>
            </footer>
        </div>
    )
}

export default CardJogo