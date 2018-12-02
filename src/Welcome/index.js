import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const buttonStyle = {
    marginTop: '40%'
  }
  return(
      <div>
        <div className='buttons' >
          <Link to='/login'>
            <Button inverted color='green' style={buttonStyle}>
              Log in w/ Email
            </Button>
          </Link>

          <Link to='/signup'>
            <Button inverted color='red' style={buttonStyle}>
              Sign up w/ Email
            </Button>
          </Link>
        </div>
      </div>
    );
}

export default Welcome;
