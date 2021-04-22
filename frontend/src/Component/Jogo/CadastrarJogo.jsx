import React, { useState } from 'react';
import '../Css/style.css'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'

const CadastrarJogo = (props) => {

    const [jogo, setJogo] = useState({ nome: "", genero: "", concluido: 0, console: "" })
    let history = useHistory()
    const config = {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` }
    }





    const confirmar = async (event) => {
        try {

            await axios.post(`http://localhost:3333/jogos/`, jogo, config).then(res => {
                history.push("/dashboard")
            }).catch(err => {
                let index = err.response.data.error.message.search('Duplicate entry')
                if (index !== -1) {
                    alert("Jogo já cadastrado")

                } else {
                    alert("Ocorreu um erro inesperado")

                }
            })
        } catch (error) {
            alert("erro ao conectar ao servidor")
        }
    }




    return (
        <div className="login-form">
            <h1 className="title title-color">Cadastrar Jogo</h1>
            <form className="box" onSubmit={(event) => {
                event.preventDefault()
                confirmar()
            }}>
                <div className="field">
                    <label className="label">Nome</label>
                    <div className="control">
                        <input className="input" required type="text" value={jogo.nome} onChange={event => { setJogo({ ...jogo, 'nome': event.target.value }) }} placeholder="Ex: Final Fantasy" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">genero</label>
                    <div className="control">
                        <input className="input" required type="text" value={jogo.genero} onChange={event => { setJogo({ ...jogo, 'genero': event.target.value }) }} placeholder="Ex: rpg" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">console</label>
                    <div className="control">
                        <input className="input" required type="text" value={jogo.console} onChange={event => { setJogo({ ...jogo, 'console': event.target.value }) }} placeholder="Ex: PC" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">concluído?</label>
                    <div className="control">
                        <div class="select is-primary">
                            <select onChange={(event) => {
                                if (event.target.value === "Não") {
                                    jogo.concluido = 0
                                }
                                else {
                                    jogo.concluido = 1
                                }
                            }}>
                                <option>Não</option>
                                <option>Sim</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="container-botoes">
                    <button className="button is-primary">Salvar</button>
                    <Link className="button is-info" to="/dashboard">
                        Voltar
                </Link>
                </div>
            </form>

        </div>
    )
}

export default CadastrarJogo