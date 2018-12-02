import React, { Component } from 'react';
import { socket } from '../index';
 
import ChatRoom from '../ChatRoom';
class MainComponent extends Component {
  constructor(){
    super();
    this.state = {
      data: '',
      messages: [],
    }
  }



  render(){
    console.log('HELLO');
    socket.emit('message', 'MIRZAaaaaaa');

    return(

      <div>
        <div className='chatbox'>
          <h2>HELLO</h2>
          <ChatRoom />
          <h2>{this.state.data}</h2>
        </div>
      </div>
    );
  }
}
export default MainComponent;
