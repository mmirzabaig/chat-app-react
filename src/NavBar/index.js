import React, { Component } from 'react'
import { Menu, Segment, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { socket } from '../index';


export default class MenuExampleInverted extends Component {
  constructor(){
    super();
    this.state = {
          activeItem: 'home',
          route: '/login',
          authRoute: 'Login',
          room: true
        }
  }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleLoggin = () => {

  }
  componentDidMount(){
    socket.on('session', (data) => {
      console.log('THIS IS LOGIN DATA', data);
      if (data === 'loggedIn') {
        this.setState({
          route: '/logout',
          authRoute: 'Logout'
        })
      } else {
        this.setState({
          logged: true,
          route: '/login',
          authRoute: 'Login'
        })
      }
    });

    socket.on('Personal', (data) => {
      if (data === 'YEAH BITCH') {
        this.setState({
          on: true
        })
      }
    });
  }
  render() {
    const { activeItem } = this.state;

    const launchChatroom = () => {
      console.log('HELLOOOOOO')
      return(
      <div>
        <Link style={style} to="/personal">
          <Menu.Item name='PersonalChatroom'
            active={activeItem === 'PersonalChatroom'}
            onClick={this.handleItemClick}>
          </Menu.Item>
        </Link>
      </div>
    );
    };

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

          {this.state.on ? launchChatroom() : null}
          
          <div>
          <Link style={style} to="/messages">
            <Menu.Item name='Messages'
              active={activeItem === 'Messages'}
              onClick={this.handleItemClick}>
            </Menu.Item>
          </Link>
          </div>

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
