import React, { Component } from 'react';
import { socket } from '../index.js';
import swal from '@sweetalert/with-react';
import { Redirect } from 'react-router-dom';

const Logout = () => {
  socket.emit('logoutUser', 'loggedOut');
  socket.emit('session', 'loggedOut');
  swal('Logged Out');
  return(
    <Redirect to='/' />
  )
}

export default Logout;
