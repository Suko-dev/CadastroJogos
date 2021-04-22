import React, { useState } from 'react';
import '../Css/style.css'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let history = useHistory()

    const login = async (event) => {
        if (email !== "" && password !== "") {
            try {
                await axios.post('http://localhost:3333/users/login', { "email": email, "password": password }).then(res => {
                    sessionStorage.setItem("token", res.data.token)
                    props.isAuthed(true)
                    history.push("/dashboard")

                }).catch(err => {
                    if (err.response.status === 401) {
                        alert("usuário ou senha incorretos")
                        setEmail("")
                        setPassword("")
                    }

                })
            } catch (error) {
                alert("erro ao conectar ao servidor")
            }
        }
    }

    return (
        <div className="login-form">
            <h1 className="title title-color">Login</h1>
            <form className="box" onSubmit={(event) => {
                event.preventDefault()
                login()
            }}>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" required type="email" value={email} onChange={event => { setEmail(event.target.value) }} placeholder="e.g. alex@example.com" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" required type="password" value={password} onChange={event => { setPassword(event.target.value) }} placeholder="********" />
                    </div>
                </div>

                <button className="button is-primary">Login</button>

            </form>
        </div>
    )
}

export default Login