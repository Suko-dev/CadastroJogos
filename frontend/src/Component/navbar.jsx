import React, { useState } from 'react';
import logo from './logo.png'
import '../Css/style.css'
import { Link } from 'react-router-dom'

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar nav-principal" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a class="navbar-item">
                    <img className="nav-logo" src={logo} width="60" height="40" />
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <Link class="navbar-item" to="/home">
                        Home
                    </Link>
                    <a class="navbar-item" href="/">
                        Documentation
                    </a>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                            Log in
                        </a>
                    </div>
                </div>
            </div>

        </nav >
    );
}

export default Example;