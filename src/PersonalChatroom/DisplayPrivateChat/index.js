import React, { Component } from 'react';
import { socket } from '../../index';
import {Form, Button} from 'semantic-ui-react';
class DisplayPrivateChat extends Component {
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
  handleSubmit = async (e) =>{
    e.preventDefault();
    await console.log(this.props.roomID, 'this.props.roomID')
    await console.log(this.state.messageValue, 'messageValue');
    await console.log('hello bnknjkjnkjn')
    await socket.emit(this.state.roomID + 'Pmessage', this.state.messageValue);
    this.setState({messageValue: ''});
  }

  render(){
    const messages = this.state.messages.map((message, i) => {
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

export default DisplayPrivateChat;
