import React, { Component } from 'react';
import Categories from '../';
import DisplayPosts from '../DisplayPosts';


class CompScieWebDes extends Component {
  constructor() {
    super();
    this.state = {
      categoryData: [],
    }
  }

  getCategories = async (e) => {
    try {
      const getCategoryData = await fetch('http://localhost:9000/post/compsciewebdes');
      const getCategoryDataJson = await getCategoryData.json();
      return getCategoryDataJson;

    } catch(err) {
      console.log(err);
      return(err);
    }
  }

  componentDidMount() {
    this.getCategories().then((data) => {
      this.setState({
        categoryData: data
      })
    })
  }

  render() {
    return (
            <div>
              <div className='chatbox'>
                <div className='chatboxContainer'>
                  <h2 className='chatboxContainerHeading'>Computer Science & Web Design</h2>
                  {this.state.categoryData.data ? <DisplayPosts postsData={this.state.categoryData.data}/> : null}
                </div>
                  <Categories />
              </div>
            </div>
    );
  }
}

export default CompScieWebDes;
