import React from 'react'
// import logo from 'http://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/The-Simpsons-Logo-icon.png';
import Login from './Login'
class Header extends React.Component {
  constructor(){
    super()
    this.state = {
      modal: false
    }
  }
  componentWillUnmount(){
    this.setState({modal: false})
  }
  showLoginForm = () => {
    this.setState({modal: !this.state.modal})
  }

  hideForm = () => {
    this.componentWillUnmount()
  }

  render(){
    return(
      <div>
        <div className="ui menu">
          <div className="header item">
            <img alt='The Simpsons Logo' src='https://freepngimg.com/thumb/the_simpsons/35385-2-the-simpsons-photos-thumb.png' />
          </div>
          <a href='#' className="item">
            About Us
          </a>
          <a href='#' className="item">
            Jobs
          </a>
          <a href='#' className="item" onClick={this.showLoginForm}>
            Login
          </a>
        </div>
        {this.state.modal ? <Login handleLogin={this.props.handleLogin} hideForm={this.hideForm} handleUsernameChange={this.props.handleUsernameChange} handlePasswordChange={this.props.handlePasswordChange}/> : null}
      </div>
    )
  }
}

export default Header
