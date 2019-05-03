import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './home/home';
import MembersComponent from "./components/membersComponent";
import Toolbar from "./home/toolbar";
import "./home/home.css";

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Toolbar title="Phoenix Force" className="main-toolbar" />
        <div className="App">
          <BrowserRouter>
            <main className="main">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/members" component={MembersComponent} />
              </Switch>
            </main>
          </BrowserRouter>
        </div>
      </div>
    );  
  }
}

export default App;
