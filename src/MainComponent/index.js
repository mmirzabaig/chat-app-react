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
            <h2 className='categoryContainerHeading'>Categories</h2> <br/>
            <h4 className='categoryContainerText'>Computer Science</h4>
            <h4 className='categoryContainerText'>Science</h4>
            <h4 className='categoryContainerText'>Mathmatics</h4>
            <h4 className='categoryContainerText'>Books</h4>
            <h4 className='categoryContainerText'>Philosophy</h4>
            <h4 className='categoryContainerText'>Music</h4>

          </div>
        </div>
      </div>
    );
  }
}
export default MainComponent;
