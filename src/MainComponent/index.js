import React, { Component } from 'react';
import { socket } from '../index';
import ChatRoom from '../ChatRoom';
import './style.css';
import FileUpload from '../FileUpload';

class MainComponent extends Component {
  constructor(){
    super();
    this.state = {
      data: '',
      messages: [],
    }
  }



  render(){

    socket.emit('message', 'MIRZAaaaaaa');

    return(

      <div>
        <div className='chatbox'>
          <div className='chatboxContainer'>
            <h2>HELLO</h2>
          </div>
          <div className='categoryContainer'>
            <h2>HELLO</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default MainComponent;
