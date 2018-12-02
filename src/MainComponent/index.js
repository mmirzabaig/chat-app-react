import React, { Component } from 'react';
import Welcome from '../Welcome';
import './style.css';

class MainComponent extends Component {
  constructor(){
    super();
    this.state = {
      data: ''
    }
  }
  render(){

    return(
      <div>
        <div className='chatbox'>
          <h2>HELLO</h2>
        </div>
      </div>
    );
  }
}
export default MainComponent;
