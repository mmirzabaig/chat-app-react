import React, { Component } from 'react';
import Categories from '../';
import DisplayPosts from '../DisplayPosts';
import { socket } from '../../index';

class Science extends Component {
  constructor() {
    super();
    this.state = {
      categoryData: [],
    }
  }

    getCategories =  (e) => {
        socket.emit('findScience', 'findScience')
      }


    componentDidMount() {
      socket.on('foundScience', (data) => {
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
                    <h2 className='chatboxContainerHeading'>Science</h2>
                    {this.state.categoryData ? <DisplayPosts postsData={this.state.categoryData}/> : null}
                  </div>
                    <Categories />
                </div>
              </div>
      );
    }
  }


export default Science;
