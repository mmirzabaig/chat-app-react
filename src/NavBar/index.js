import React, { Component } from 'react'
import { Menu, Segment, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export default class MenuExampleInverted extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    const navBar = {
      position: 'sticky',
      top: 0,
      opacity: '0.9',
    }

    return (
      <div className='navBar' style={navBar}>
        <Menu inverted>
          <Link to="/">
            <Menu.Item name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}>
            </Menu.Item>
          </Link>

          <Link to="/">
            <Menu.Item name='Profile'
              active={activeItem === 'View Your Profile'}
              onClick={this.handleItemClick}>
            </Menu.Item>
          </Link>

          <Menu.Item name='GitHub'
            position='right'
            href='//github.com/WBHankins93/Pints-Shells'
            active={activeItem === 'GitHub'}
            onClick={this.handleItemClick}>
          </Menu.Item>

          <Link to="/login">
            <Menu.Item name='Logout'
              active={activeItem === 'Logout'}
              onClick={this.handleItemClick}>
            </Menu.Item>
          </Link>

          <Link to="/login">
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
