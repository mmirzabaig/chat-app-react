import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const buttonStyle = {
    marginTop: '40%'
  }
  return(
      <div style={{border: '2px solid black', height: '770px', margintop: '50%', marginleft: '50%'}}>
        <div style={{border: '2px solid red', height: '80%', width: '80%', marginLeft: '5%'}}>
          <div style={{width: '100%', height: '30px', border: '2px solid yellow'}}>

          </div>

        </div>
      </div>
    );
}

export default Welcome;
// <Link to='/login'>
//   <Button inverted color='green' style={buttonStyle}>
//     Log in w/ Email
//   </Button>
// </Link>
//
// <Link to='/signup'>
//   <Button inverted color='red' style={buttonStyle}>
//     Sign up w/ Email
//   </Button>
// </Link>
