import React, { Component } from 'react';
import Categories from '../';
import DisplayPosts from '../DisplayPosts';
import { socket } from '../../index.js';
import swal from '@sweetalert/with-react';


class Music extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  getCategories =  (e) => {
      socket.emit('findMusic', 'findMusic')
    }


  componentDidMount() {
    socket.on('foundMusic', (data) => {
      if (data === 'Incorrect Username Or Password') {
        swal('Please Log In');
      } else {
        this.setState({
          categoryData: data
        })
        console.log(this.state.categoryData, 'JAMES')
      }
    })

    this.getCategories();
  }

  render() {
    return (
            <div>
              <div className='chatbox'>
                <div className='chatboxContainer'>
                  <h2 className='chatboxContainerHeading'>Music</h2>
                  {this.state.categoryData ? <DisplayPosts postsData={this.state.categoryData}/> : null}
                </div>
                  <Categories />
              </div>
            </div>
    );
  }
}


export default Music;
