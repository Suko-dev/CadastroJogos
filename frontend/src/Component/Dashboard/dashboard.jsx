import React, { useEffect, useState } from 'react';
import '../Css/style.css'
import { useHistory, Link } from 'react-router-dom'
import CardJogo from '../Jogo/CardJogo';
import axios from 'axios';

const Dashboard = (props) => {

    const config = {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` }
    }
    const [filtro, setfiltro] = useState({ concluido: 0, campo: "nome", pesquisa: "" })
    const [jogos, setjogos] = useState(null)
    let history = useHistory()

    async function fetchData() {
        await axios.get("http://localhost:3333/jogos/", config).then(async res => {
            setjogos(res.data)

        }).catch(err => {
            if (err.response.status === 401) {
                history.push("/login")
            }

            console.log(err.response)
        })
    }

    useEffect(() => {


        fetchData();
    }, []);

    const onDelete = async (id) => {
        await axios.delete(`http://localhost:3333/jogos/${id}`, config).catch(err => console.log(err))
            .then(res => setjogos(jogos.filter(jogo => jogo.id !== id)))

    }

    if (jogos === null) {
        return <p>Loading...</p>
    }

    return (
        <div className="section">

            <form className="field filter" onSubmit={async (event) => {
                event.preventDefault();
                if (filtro.pesquisa === "") {
                    fetchData();
                } else {
                    await axios.get(`http://localhost:3333/jogos/?${filtro.campo}=${filtro.pesquisa}&concluido=${filtro.concluido}`, config).then(async res => {
                        setjogos(res.data)

                    }).catch(err => {
                        if (err.response.status === 401) {
                            history.push("/login")
                        }

                        console.log(err.response)
                    })
                }
            }}>
                <p className="control">
                    <span className="select">
                        <select onChange={(event) => setfiltro({ ...filtro, campo: event.target.value })}>
                            <option>nome</option>
                            <option>genero</option>
                            <option>console</option>
                        </select>
                    </span>
                </p>
                <p className="control">
                    <input className="input " type="text" onChange={(event) => setfiltro({ ...filtro, pesquisa: event.target.value })}
                        value={filtro.pesquisa} placeholder="Digite aqui o que deseja" />
                </p>
                <p className="control">
                    <button className="button is-primary">
                        Filtrar
                    </button>
                </p>
                <label className="align-checkbox">
                    <input type="checkbox" onChange={(event) => {
                        if (event.target.checked) {
                            setfiltro({ ...filtro, concluido: 1 })
                        }
                        else { setfiltro({ ...filtro, concluido: 0 }) }
                    }} />
                    <p className="text-inline">concluído?</p>
                </label>
            </form>
            <div className="container" >

            </div>
            <div className="container section">
                <ul className="columns card-container">
                    {jogos.map((element, index) => {
                        return (<li key={index} className="card">< CardJogo jogo={element} posicao={index} delete={onDelete} /></li>)
                    })}
                </ul>
            </div>
            <Link to="/cadastrar/jogo" className="delete is-danger add-item"/>

        </div>)
}

export default Dashboard