import React, {Component} from 'react';
import {socket} from '../index'

import ChatDisplay from '../ChatDisplay';

class ChatRoom extends Component {
  constructor(){
    super();
    this.state = {
      messages: [],
    }
  }

  componentDidMount(){
    console.log('CHATROOOM')
    socket.on('messages', (message) => {
      console.log('message', message)
      this.setState({
        messages: [...message]
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
