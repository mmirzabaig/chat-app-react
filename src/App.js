import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Welcome from './Welcome';
import MainComponent from './MainComponent';
import NavBar from './NavBar';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/welcome' component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path="/" component={MainComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;
