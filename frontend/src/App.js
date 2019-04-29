import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './home/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
