import React, { Component } from 'react'
import { Button, Header, Image, Modal, Input, Form, Dropdown } from 'semantic-ui-react'
import { socket } from '../index';

class CreatePost extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      topic: '',
      description: '',
      category: '',
      time: '',
      guest: [],
      date: '',
      duration: ''
    }
  }
  handleChange = (e) => {
    console.log(e.currentTarget.value)
    console.log(e.currentTarget.name);

    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      socket.emit('createNewPost', this.state)
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

    const durationOptions = [
  {
    key: '15',
    text: '15',
    value: '15',
    description: 'minutes'
  },
  {
    key: '30',
    text: '30',
    value: '30',
    description: 'minutes'
  },
  {
    key: '45',
    text: '45',
    value: '45',
    description: 'minutes'
  },
  {
    name: 'duration',
    key: '1',
    text: '1',
    value: '1',
    description: 'hour'
  },
]

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
              <Input style={radioStyle} type='radio' name='category' onChange={this.handleChange} value='CompScieWebDes' /> ComputerScience-WebDesign
              <Input style={radioStyle} type='radio' name='category' onChange={this.handleChange} value='Science' /> Science
              <Input style={radioStyle} type='radio' name='category' onChange={this.handleChange} value='Books'/> Books
              <Input style={radioStyle} type='radio' name='category' onChange={this.handleChange} value='Mathematics' /> Mathematics
              <Input style={radioStyle} type='radio' name='category' onChange={this.handleChange} value='Philosophy'/> Philosophy
              <Input style={radioStyle} type='radio' name='category' onChange={this.handleChange} value='Music' /> Music <br/><br/><br/>
              <Form.Input name='time' type='time' placeholder='Write Hour For Ex (16)' onChange={this.handleChange} />
              <Form.Input name='date' type="date" min="2018-01-01" max="2020-12-31" onChange={this.handleChange} />
              <select style={{height: '40px'}} placeholder="Duration" name='duration' onChange={this.handleChange}>
                <option value="" disabled selected>Select Duration</option>
                <option value="15">15 Minutes</option>
                <option value="30">30 Minutes</option>
                <option value="45">45 Minutes</option>
                <option value="1">1 Hour</option>
              </select> <br />
              <Button>Create</Button>
            </Form>

          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default CreatePost;
