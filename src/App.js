import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Welcome from './Welcome';
import MainComponent from './MainComponent';
import NavBar from './NavBar';
import Mathematics from './Categories/Mathematics';
import Books from './Categories/Books';
import Philosophy from './Categories/Philosophy';
import Science from './Categories/Science';
import CompScieWebDes from './Categories/ComputerScience-WebDesign';
import Music from './Categories/Music';
import Hello from './Hello';
import DirectMessages from './DirectMessages';
import Chatroom from './ChatRoom';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/hello' component={Hello} />
          <Route exact path='/welcome' component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path="/" component={MainComponent} />
          <Route exact path='/mathematics' component={Mathematics} />
          <Route exact path='/books' component={Books} />
          <Route exact path='/philosophy' component={Philosophy} />
          <Route exact path='/science' component={Science} />
          <Route exact path='/compsciewebdes' component={CompScieWebDes} />
          <Route exact path='/music' component={Music} />
          <Route exact path='/messages' component={DirectMessages} />
          <Route exact path='/chatroom' component={Chatroom} />

        </Switch>
      </div>
    );
  }
}

export default App;
