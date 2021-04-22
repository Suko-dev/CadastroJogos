import React, { useState } from 'react';
import '../Css/style.css'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Signin = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [confirmPassword, setConfirmation] = useState("")

    let history = useHistory()

    const signin = async (event) => {
        if (email !== "" && password !== "" && username !== "" && confirmPassword !== "") {
            if (confirmPassword === password) {
                try {

                    await axios.post('http://localhost:3333/users/cadastrar', { "email": email, "username": username, "password": password }).then(res => {
                        sessionStorage.setItem("token", res.data.token)
                        props.isAuthed(true)
                        history.push("/dashboard")
                    }).catch(err => {
                        let index = err.response.data.error.message.search('Duplicate entry')
                        if (index !== -1) {
                            alert("usuário já cadastrado")
                            setPassword("")
                            setConfirmation("")
                            setEmail("")
                            setUsername("")
                        } else {
                            alert("Ocorreu um erro inesperado")
                            setPassword("")
                            setConfirmation("")
                            setEmail("")
                            setUsername("")
                        }
                    })
                } catch (error) {
                    alert("erro ao conectar ao servidor")
                }
            }
            else {
                alert("senhas não são iguais")
                setPassword("")
                setConfirmation("")
            }
        }
    }

    return (
        <div className="login-form">
            <h1 className="title title-color">Cadastrar</h1>
            <form className="box" onSubmit={(event) => {
                event.preventDefault()
                signin()
            }}>
                <div className="field">
                    <label className="label">Nome</label>
                    <div className="control">
                        <input className="input" required type="text" value={username} onChange={event => { setUsername(event.target.value) }} placeholder="ex: Cleiton" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" required type="email" value={email} onChange={event => { setEmail(event.target.value) }} placeholder="e.g. alex@example.com" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Senha</label>
                    <div className="control">
                        <input className="input" required type="password" value={password} onChange={event => { setPassword(event.target.value) }} placeholder="********" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Confirme sua senha</label>
                    <div className="control">
                        <input className="input" required type="password" value={confirmPassword} onChange={event => { setConfirmation(event.target.value) }} placeholder="********" />
                    </div>
                </div>
                <button className="button is-primary">Login</button>

            </form>

        </div>)
}

export default Signin