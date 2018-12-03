import React, { Component } from 'react';
import Categories from '../';

class Science extends Component {
  constructor() {
    super();
    this.state = {
      mathData: [],
    }
  }

  render() {
    return (
            <div>
              <div className='chatbox'>
                <div className='chatboxContainer'>
                  <h2 className='chatboxContainerHeading'>HELLO UserName</h2>
                </div>
                  <Categories />
              </div>
            </div>
    );
  }
}

export default Science;
