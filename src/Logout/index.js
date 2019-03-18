import React, { Component } from 'react';
import { socket } from '../index.js';
import swal from '@sweetalert/with-react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    socket.emit('logoutUser', 'loggedOut');
    socket.emit('session', 'loggedOut');
    this.props.history.push('/');
    swal('Logged Out!')
  }
  render() {

    return(
      null
    )
  }

}

export default Logout;
