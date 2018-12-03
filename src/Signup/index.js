import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Input } from 'semantic-ui-react';

export default class Signup extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
    }
  }
  handleChange = (e) => {
    console.log(e.currentTarget.value)
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  render(){
    return(
      <div>
        <h2>SIGNUP PAGE</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input type='text' name='email' placeholder='email address' onChange={this.handleChange} />
          <Form.Input type='text' name='username' placeholder='username' onChange={this.handleChange} />
          <Form.Input type='text' name='password' placeholder='password' onChange={this.handleChange} />
          <Form.Input type='text' name='linkedin' placeholder='LinkedIn' onChange={this.handleChange} />
          <Link to='/'>
            <Button type='submit'>
              Submit
            </Button>
          </Link>
        </Form>
      </div>
    )
  }
}
