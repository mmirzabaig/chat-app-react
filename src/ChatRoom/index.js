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
      console.log('message', msgObj)
      this.setState({
        messages: [...msgObj.messages],
        username: msgObj.username

      })
    });
  }
  render(){


    return (
      <div>
        <ChatDisplay username={this.state.username} messages={this.state.messages}/>
      </div>
      )
  }
};


export default ChatRoom;
