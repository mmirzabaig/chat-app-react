import React, { Component } from 'react';
import { socket } from '../index';
import {Form, Button} from 'semantic-ui-react';
class ChatDisplay extends Component {
  constructor(){
    super();
    this.state = {
      messageValue: '',
    }
  }
  handleChange = (e) => {
    this.setState({messageValue: e.currentTarget.value});
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    socket.emit('message', this.state.messageValue);
    this.setState({messageValue: ''});
  }

  render(){
    console.log(this.props.messages, ' this is this.props');
    const messages = this.props.messages.map((message, i) => {
      return <li key={i}>{message.username}: {message.message} </li>
    });

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input type='text' value={this.state.messageValue} onChange={this.handleChange}/>
        </Form>
        <ul>
          {messages}
        </ul>
      </div>
      )
  }
}

export default ChatDisplay;
