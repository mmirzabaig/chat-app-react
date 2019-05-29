import React, { Component } from 'react'
import { Menu, Segment, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { socket } from '../index';
import { subscribeToTimer } from '../api';



export default class MenuExampleInverted extends Component {
  constructor(){
    super();
    this.state = {
          activeItem: 'home',
          route: '/login',
          authRoute: 'Login',
          room: true,
          on: 'false',
          userID: ''
        }
  }


  handleItemClick = (e, { name }) => {

    this.setState({ activeItem: name })
  }
  handleLoggin = () => {

  }

  emitEvent = (info) => {
    console.log('Hello Jim');
    socket.emit('LIVE-LAUNCH', info);
  }
  componentDidMount(){

    subscribeToTimer((err, timestamp) => this.setState({
      timestamp,
      updateState: false
    }));

    socket.on('redirectMessageToServer', async (info) => {

      if (info.guest === this.state.userID) {
        await console.log('LIVE LAUNCH')
        if (info.message === 'LIVE-LAUNCH') {
        await console.log(info);
          await console.log('REDIRECTmESSAGEtOsERVER');
          await this.emitEvent(info);
        }
      }

    });

    socket.on('session', (data) => {
      console.log(data.userID, '56787654345678765434567');
      if (data.status === 'loggedIn') {
        this.setState({
          route: '/logout',
          authRoute: 'Logout',
          userID: data.userID
        });
      } else {
        this.setState({
          logged: true,
          route: '/login',
          authRoute: 'Login'
        });
      }
    });

    socket.on('initiateRoomLaunch', (data) => {
      if (data.message === 'LAUNCH') {
        console.log(data.roomID, 'data.roomID - 1');
        this.setState({
          on: 'true',
          uniqueRoomId: data.roomID
        })
      }
    });
    socket.on('initiateRoomDestroy', (data) => {
      if (data === 'DESTROY') {
        this.setState({
          on: 'false',
        })
      }
    });
  }
  render() {
    const { activeItem } = this.state;

    const launchChatroom = () => {
      if(this.state.activeItem === 'PersonalChatroom' && !this.state.count) {
        this.setState({count: '1'});
        console.log(this.state.uniqueRoomId, 'TESTING');
      }
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

          <Link style={style} to="/profile">
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

          {this.state.on === 'true' ? launchChatroom() : null}

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
