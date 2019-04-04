import { subscribeToTimer } from './api';
import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
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
import PersonalChatroom from './PersonalChatroom';

import { socket } from './index';




class App extends Component {
  constructor(){
    super();
    this.state = {
      logged: false,
      timestamp: 'no timestamp yet'
    }
  }

  shouldComponentUpdate() {

    return true;
  }


  componentDidMount(){
    // subscribeToTimer((err, timestamp) => this.setState({
    //   timestamp,
    //   updateState: false
    // }));
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/hello' render={Hello} />
          <Route exact path='/personal' component={PersonalChatroom} />
          <Route exact path='/welcome' component={Welcome} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/signup' render={Signup} />
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
