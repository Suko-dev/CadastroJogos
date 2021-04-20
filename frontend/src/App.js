import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Component/navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/">
              <div className="section">
                <div className="container">
                  <h1 className="title">Hello Mundo</h1>
                </div>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;