import React, { Component } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { socket } from '../index';

const ViewDirectMessages = (props) => {

  const handleClick = (e, item) => {
    console.log(item, 'CHRISTINE')
    socket.emit('handleChosen', item.item._id);

  }

  const display = props.props.map((item) => {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{item.topic}</Card.Header>
          <Card.Meta>
            <span className='date'>{item.description}</span>
          </Card.Meta>
          <Card.Description>{item.username}</Card.Description>
          <Button item={item} onClick={handleClick}>Accept</Button>
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

export default ViewDirectMessages;
