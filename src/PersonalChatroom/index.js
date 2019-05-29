import React, { Component } from 'react';
import { socket } from '../index'
import DisplayPrivateChat from '../ChatRoom';

class PersonalChatroom extends Component {
  constructor(){
    super();
    this.state = {
      messages: [],
      username: ''
    }
  }

   componentDidMount(){

     socket.on('uniqueRoomId',  (data) => {
      console.log(data);
      this.setState({roomID: data});
      console.log(this.state.roomID, 'uniqueRoomId + SETSTATTESTSEAT');
    });

   socket.on(this.state.roomID + 'Pessages', async (msgObj) => {
      console.log(msgObj, '345676543');
      this.setState({
        messages: [...msgObj],
      })
    });
  }
  render(){


    return (
      <div>
        <DisplayPrivateChat messages={this.state.messages}/>
      </div>
      )
  }
// componentDidMount(){
//
//  socket.on(this.state.roomID + 'Pmessages', (messages) => {
//     console.log(messages, ' messages')
//     this.setState({
//       messages: [...messages],
//     });
//   });
//
//    socket.on('uniqueRoomId', (data) => {
//     this.setState({roomID: data});
//     console.log(this.state.roomID, 'uniqueRoomId + SETSTATTESTSEAT');
//   });
//
// }
// render(){
//
//
//   return (
//     <div>
//       <DisplayPrivateChat roomID={this.state.roomID} messages={this.state.messages}/>
//     </div>
//     )
// }
}

export default PersonalChatroom;
