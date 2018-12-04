import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'semantic-ui-react';

export default class Auth extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
    }
  }
  handleChange = (e) => {
    console.log(e.currentTarget.value)
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello')
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
          <Form.Input type='text' placeholder='password' name='password' onChange={this.handleChange} />
          <Link to='/'><Button type='submit'>Submit</Button></Link>
        </Form>
      </div>
    );
  }
}
