import React, { Component } from 'react'
import { Button, Header, Image, Modal, Input, Form } from 'semantic-ui-react'

class CreatePost extends Component {
  constructor(){
    super();
    this.state = {
      topic: '',
      description: '',
    }
  }
  handleChange = (e) => {
    console.log(e.currentTarget.name, e.currentTarget.value)
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createPost = await fetch('http://localhost:9000/post', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (err) {
      console.log(err);
      return(err);
    }
  }

  render(){
    const buttonStyle =  {
      display: 'flex',
      color: 'white',
      backgroudColor: 'blue',
      justifyContent: 'center',
      fontSize: '30px',
      marginTop: '25%',
      marginLeft: '10%',
      borderRadius: '50%',
      height: '300px',
      width: '300px'
    }

    const radioStyle = {
      marginLeft: '10px',
    }

    return(
      <Modal trigger={<Button color='black' style={buttonStyle}>Create A Post</Button>}>
        <Modal.Content>
          <Modal.Description>
            <Header>Create A Post</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input name='topic' type='text' placeholder='Post Topic' onChange={this.handleChange} /> <br/>
              <Form.TextArea name='description' type='text' placeholder='Post Description' onChange={this.handleChange} /> <br/>
              <Input style={radioStyle} type='radio' name='category' onChange={this.handleChange} value='CompScieWebDes' /> Celebrity
              <Input style={radioStyle} type='radio' name='category' onChange={this.handleChange} value='Science' /> Movies
              <Input style={radioStyle} type='radio' name='category' onChange={this.handleChange} value='Books'/> Sports
              <Input style={radioStyle} type='radio' name='category' onChange={this.handleChange} value='Mathematics' /> Music
              <Input style={radioStyle} type='radio' name='category' onChange={this.handleChange} value='Philosophy'/> Sports
              <Input style={radioStyle} type='radio' name='category' onChange={this.handleChange} value='Music' /> Music <br/><br/><br/>
              <Button>Create</Button>
            </Form>

          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default CreatePost;
