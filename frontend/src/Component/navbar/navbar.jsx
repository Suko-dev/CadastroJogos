import React, { useState } from 'react';
import logo from './logo.png'
import '../Css/style.css'
import { Link, useHistory } from 'react-router-dom'

const Navbar = (props) => {

    const [state, setstate] = useState(false)
    let history = useHistory()
    
    if (props.isAuthed.login === true && state === false) {
        const wow = async () => { await setstate(true) }
        wow()
    }


    function Logado() {
        if (sessionStorage.getItem("token") !== 'null') {
            return <Link className="button is-danger" to="/login" onClick={() => {
                sessionStorage.setItem("token", null)
                setstate(false)
            }}>
                <strong>Sair</strong>
            </Link>
        } else
            return <div>
                <Link className="button is-primary" to="/cadastrar">
                    <strong>Sign up</strong>
                </Link>
                <Link className="button is-light" to="/login">
                    Log in
            </Link>
            </div>
    }



    return (
        <nav className="navbar nav-principal" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                    <img className="nav-logo" src={logo} width="60" height="40" onClick={() => { history.push("/dashboard"); history.go(0) }} />
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/dashboard" onClick={() => { history.push("/dashboard"); history.go(0) }}>
                        Home
                    </Link>
                    <a className="navbar-item" href="https://github.com/Suko-dev/CadastroJogos">
                        Documentation
                    </a>
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <Logado />,
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;