import React, { Component } from 'react';
import { socket } from '../index';
import {Form, Button} from 'semantic-ui-react';
class ChatDisplay extends Component {
  constructor(props){
    super(props);
    this.state = {
      messageValue: '',
      messages: props.messages
    }
  }
  handleChange = (e) => {
    this.setState({messageValue: e.currentTarget.value});
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    console.log('hello nknkjnkj')
    socket.emit('message', this.state.messageValue);
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
          <Button type='submit'>Submit</Button>
        </Form>
        <ul>
          {messages}
        </ul>
      </div>
      )
  }
}

export default ChatDisplay;
