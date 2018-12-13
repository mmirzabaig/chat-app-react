import React, { Component } from 'react'
import { Menu, Segment, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { socket } from '../index';


export default class MenuExampleInverted extends Component {
  constructor(){
    super();
    this.state = {
          activeItem: 'home',
          logged: false,
          route: '/login',
          authRoute: 'Login'
        }
  }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleLoggin = () => {

  }
  componentDidMount(){
    socket.on('session', (data) => {
      if (data === 'loggedIn') {
        this.setState({
          logged: true,
          route: '/logout',
          authRoute: 'Logout'
        })
      }
    })
  }
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

          <Link style={style} to={this.state.route} >
            <Menu.Item name={this.state.authRoute}
              active={activeItem === this.state.authRoute}
              onClick={this.handleItemClick}>
            </Menu.Item>
          </Link>


        </Menu>
      </div>
    )
  }
}
