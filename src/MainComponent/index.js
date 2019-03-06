import React, { Component } from 'react';
import { socket } from '../index';
import ChatRoom from '../ChatRoom';
import './style.css';
import FileUpload from '../FileUpload';
import { Button } from 'semantic-ui-react';
import CreatePost from '../CreatePost';
import Categories from '../Categories';
import Moment from 'react-moment';
import 'moment-timezone';



class MainComponent extends Component {
  constructor(){
    super();
    this.state = {
      data: '',
      messages: [],
      currentUser: ''
    }
  }

  handleCreatePost = (e) => {
    e.preventDefault();

  }

  componentDidMount(){
    socket.on('currentUser', (user) => {
      this.setState({
        currentUser: user
      });
    })
  }

  render(){
    let time = Date();
    const dateToFormat = '1976-04-19T12:59-0500';


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
      <div className='mainComp'>
        <div className='chatbox'>
          <div className='chatboxContainer'>
            <h2 className='chatboxContainerHeading'>HELLO {this.state.currentUser}</h2>
            <CreatePost />
          </div>
            <Categories />
        </div>
      </div>
    );
  }
}
export default MainComponent;
