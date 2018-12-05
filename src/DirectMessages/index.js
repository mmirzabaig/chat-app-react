import React, { Component } from 'react';
import { socket } from '../index';
import { Card, Icon, Image } from 'semantic-ui-react'
import ViewDirectMessages from '../ViewDirectMessages';

class DirectMessages extends Component {
  constructor(){
    super();
    this.state = {
      temp: ''
    }
  }

  getDirectMessagesData = () => {
    socket.emit('requestActivePosts', 'request');
  }

  componentDidMount(){
    socket.on('foundActivePosts', (data) => {
      this.setState({
        viewData: data
      })
    })
    // CONSTRUCTOR ONLY RUNS ONCE
    this.getDirectMessagesData();
  }
  
  render() {
    return(
      <div>
        {this.state.viewData ? <ViewDirectMessages props={this.state.viewData} />: null }
      </div>
    );
  }
}

export default DirectMessages;
