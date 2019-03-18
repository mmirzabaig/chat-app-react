import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'semantic-ui-react';
import { socket } from '../index.js';
import swal from '@sweetalert/with-react';
import { Redirect } from 'react-router-dom';

export default class Auth extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      redirect: false,
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('loginUser', this.state);
  }

  componentDidMount() {
    socket.on('auth', (response) => {
      if (response === 'Incorrect Username Or Password') {
        swal('Incorrect Username Or Password');
      } else {
        swal('Login Successfull')
        this.setState({
          redirect: true
        })
      }
    })
  }

  render(){

    const formStyle = {
      width: '50%',
      position: 'center',
    }

    return(
      <div>
        <h2>LOGIN PAGE</h2>
        <Form onSubmit={this.handleSubmit} style={formStyle}>
          <Form.Input type='text' placeholder='username' name='username' onChange={this.handleChange} />
          <Form.Input type='password' placeholder='password' name='password' onChange={this.handleChange} />
          <Button type='submit'>Submit</Button>
          {this.state.redirect ? <Redirect to='/' /> : null}
        </Form>
      </div>
    );
  }
}
