import React, { Component } from 'react';
import { socket } from '../index'
import ChatDisplay from '../ChatDisplay';

class PersonalChatroom extends Component {
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


export default PersonalChatroom;
