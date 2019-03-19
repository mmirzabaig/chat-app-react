import React, { Component } from 'react';
import Categories from '../';
import DisplayPosts from '../DisplayPosts';
import { socket } from '../../index';
import swal from '@sweetalert/with-react';


class Books extends Component {
  constructor() {
    super();
    this.state = {
      categoryData: [],
    }
  }

    getCategories =  (e) => {
        socket.emit('findBooks', 'findBooks')
      }

    componentDidMount() {
      socket.on('foundBooks', (data) => {
        console.log(data, 'MirZA')
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
                    <h2 className='chatboxContainerHeading'>Books</h2>
                    {this.state.categoryData ? <DisplayPosts postsData={this.state.categoryData}/> : null}
                  </div>
                    <Categories />
                </div>
              </div>
      );
    }
  }


export default Books;
