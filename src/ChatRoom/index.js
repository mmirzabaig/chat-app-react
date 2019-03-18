import React, { Component } from 'react';
import { socket } from '../index'
import ChatDisplay from '../ChatDisplay';

class ChatRoom extends Component {
  constructor(){
    super();
    this.state = {
      messages: [],
      username: ''
    }
  }

  componentDidMount(){

    socket.on('messages', (msgObj) => {
      this.setState({
        messages: [...msgObj],
      })
    });
  }
  render(){


    return (
      <div>
        <ChatDisplay messages={this.state.messages}/>
      </div>
      )
  }
};


export default ChatRoom;
