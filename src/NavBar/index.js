import React, { Component } from 'react'
import { Menu, Segment, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export default class MenuExampleInverted extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    const style = {
      fontSize: '20px',
      marginBottom: '10px'
    }
    const navBar = {
      position: 'sticky',
      top: 0,
      opacity: '0.9',
    }

    return (
      <div className='navBar' style={navBar}>
        <Menu inverted>
          <Link style={style} to="/">
            <Menu.Item name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}>
            </Menu.Item>
          </Link>

          <Link style={style} to="/">
            <Menu.Item name='Profile'
              active={activeItem === 'View Your Profile'}
              onClick={this.handleItemClick}>
            </Menu.Item>
          </Link>

          <Menu.Item style={style} name='GitHub'
            position='right'
            href='//github.com/WBHankins93/Pints-Shells'
            active={activeItem === 'GitHub'}
            onClick={this.handleItemClick}>
          </Menu.Item>

          <Link style={style} to="/chatroom">
            <Menu.Item name='Chatroom'
              active={activeItem === 'Chatroom'}
              onClick={this.handleItemClick}>
            </Menu.Item>
          </Link>


          <Link style={style} to="/messages">
            <Menu.Item name='Messages'
              active={activeItem === 'Messages'}
              onClick={this.handleItemClick}>
            </Menu.Item>
          </Link>

          <Link style={style} to="/login">
            <Menu.Item name='Login'
              active={activeItem === 'Login'}
              onClick={this.handleItemClick}>
            </Menu.Item>
          </Link>


        </Menu>
      </div>
    )
  }
}
