import React, { Component } from 'react';
import { socket } from '../../index';
import {Form, Button} from 'semantic-ui-react';
class DisplayPrivateChat extends Component {
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
    console.log(this.props.roomID, 'this.props.roomID')
    console.log(this.state.messageValue, 'messageValue');
    socket.emit(this.state.roomID + 'Pmessage', this.state.messageValue);
    this.setState({messageValue: ''});
  }

  render(){
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

export default DisplayPrivateChat;
