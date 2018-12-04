import React, { Component } from 'react';
import Categories from '../';
import DisplayPosts from '../DisplayPosts';
import { socket } from '../../index'


class CompScieWebDes extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  getCategories =  (e) => {
      socket.emit('findCompScieWebDes', 'findCompScieWebDes')
    }


  componentDidMount() {
    socket.on('foundCompScieWebDes', (data) => {
      console.log(data, 'MirZA')
      this.setState({
        categoryData: data
      });
      console.log(this.state.categoryData, 'JAMES')
    })

    this.getCategories();
  }

  render() {
    return (
            <div>
              <div className='chatbox'>
                <div className='chatboxContainer'>
                  <h2 className='chatboxContainerHeading'>Computer Science & Web Design</h2>
                  {this.state.categoryData ? <DisplayPosts postsData={this.state.categoryData}/> : null}
                </div>
                  <Categories />
              </div>
            </div>
    );
  }
}


export default CompScieWebDes;
