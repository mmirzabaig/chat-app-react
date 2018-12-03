import React, { Component } from 'react';
import { socket } from '../index';
import ChatRoom from '../ChatRoom';
import './style.css';
import FileUpload from '../FileUpload';
import { Button } from 'semantic-ui-react';
import CreatePost from '../CreatePost';
import Categories from '../Categories';

class MainComponent extends Component {
  constructor(){
    super();
    this.state = {
      data: '',
      messages: [],
    }
  }

  handleCreatePost = (e) => {
    e.preventDefault();

  }

  render(){

    socket.emit('message', 'MIRZAaaaaaa');
    const buttonStyle =  {
      display: 'flex',
      color: 'white',
      backgroudColor: 'blue',
      justifyContent: 'center',
      fontSize: '30px',
      marginTop: '25%',
      marginLeft: '10%',
      borderRadius: '50%',
      height: '300px',
      width: '300px'
    }

    return(
      <div>
        <div className='chatbox'>
          <div className='chatboxContainer'>
            <h2 className='chatboxContainerHeading'>HELLO UserName</h2>
            <CreatePost />
          </div>
            <Categories />
        </div>
      </div>
    );
  }
}
export default MainComponent;
