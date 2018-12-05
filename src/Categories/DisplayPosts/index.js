import React from 'react';
import { Button } from 'semantic-ui-react'
import ViewPost from './ViewPost';

const DisplayPosts = (props) => {
   const state = {
    hover: false
  }
  const style = {
    display: 'flex',
    justifyContent: 'space-between',

  }
  const buttonStyle = {
    height: '10%',
    width: '20%',
  }

  const displayPosts = props.postsData.map((item) => {
    return (
      <div style={style}>
        <p style={{fontSize: '20px'}}>{item.topic}</p><p style={{fontSize: '20px'}}>{item.time}</p>
        <ViewPost topic={item.topic} description={item.description} time={item.time} id={item._id}/>
      </div>
    );
  })
  console.log(props, 'PROPS')
  return(
    <div>
      {displayPosts}
    </div>
  );
}

export default DisplayPosts;
