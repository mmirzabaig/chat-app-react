import React, { Component } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { socket } from '../index';
import ViewRequests from './ViewRequests';

class ViewDirectMessages extends Component {

  constructor(){
    super();
    this.state = {
      item: null,
      view: false
    }
  }

  render(){
    const display = this.props.props.map((item) => {

      return (
        <Card>
          <Card.Content>
            <Card.Header>{item.topic}</Card.Header>
            <Card.Meta>
              <span className='date'>{item.description}</span>

            </Card.Meta>
            <Card.Description>{item.guest[0]}</Card.Description>
            <ViewRequests props={item}/>
          </Card.Content>
        </Card>
      )
    })
      return(
        <div >
        <h2>Hello</h2>
        <Card.Group>
          {display}
        </Card.Group>
        </div>

      )
    }
  }

export default ViewDirectMessages;
