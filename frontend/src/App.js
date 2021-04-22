import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Component/Dashboard/dashboard';
import EditarJogo from './Component/Jogo/EditarJogo';
import Login from './Component/Login/login';
import NavBar from './Component/navbar/navbar';
import Signin from './Component/Signin/Signin';
import CadastrarJogo from "./Component/Jogo/CadastrarJogo";

class App extends Component {
  constructor() {
    super()
    this.state = { login: false }
  }

  login = async (props) => {
    await this.setState({ login: props })
  }

  render() {


    return (
      <div>
        <Router>
          <NavBar isAuthed={this.state} logout={this.login} />
          <Switch>
            <Route path="/login" component={() => <Login isAuthed={this.login} />} />
            <Route path="/jogo/:id" component={EditarJogo} />
            <Route path="/dashboard" component={Dashboard} />

            <Route path="/cadastrar/jogo" component={CadastrarJogo} />
            <Route path="/cadastrar" exact component={() => <Signin isAuthed={this.login} />} />

          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;