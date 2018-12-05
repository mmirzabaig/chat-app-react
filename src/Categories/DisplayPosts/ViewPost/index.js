import React, { Component } from 'react'
import { Button, Header, Image, Modal, Input, Form } from 'semantic-ui-react';
import { socket } from '../../../index.js';


const ViewPost = (props) => {
  const handleSubmit = () => {
    console.log('it submits')
    socket.emit('requestTalk', props);
  }
      console.log('HELLO', props)
    return(
      <Modal trigger={<Button className='Button' color='black'>View</Button>}>
        <Modal.Content>
          <Modal.Description>
            <Header>Create A Post</Header>
            <Form onSubmit={handleSubmit}>
              <p>{props.topic}</p> <br/>
              <p>{props.description}</p> <br/>
              <Button>Let's Talk!</Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }

export default ViewPost;
