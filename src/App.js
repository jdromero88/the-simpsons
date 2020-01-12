import React from 'react';
import './App.css';
import Header from './components/Header'
import CardContainer from './components/CardContainer'
const URL= 'https://api.duckduckgo.com/?q=simpsons+characters&format=json&pretty=1&atb=v201-2__'
const USERS = [{username:'chine',
      password: 'chine',
      logged: false},
      {username:'trevor',
      password: 'trevor',
      logged: false}]

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      simpsonsArray: [],
      username:'',
      password: '',
      logged: false
    }
  }

  componentDidMount() {
    return fetch(URL)
    .then(res=> res.json())
    .then(characters => this.setState({simpsonsArray: characters.RelatedTopics}))
    .catch(err=> console.log(err.message))
  }

  handleUsernameChange = e => {
    this.setState({username: e.target.value})
  }

  handlePasswordChange = e => {
    this.setState({password: e.target.value})
  }
  handleLogin = e => {
    e.preventDefault()
    let userc = USERS.find( user => user.username.toLowerCase() === this.state.username.toLowerCase())
    if (userc) {
      if(userc.username === this.state.username.toLowerCase() && userc.password === this.state.password){
        alert('Hi ' + this.state.username)
        this.setState({logged: !this.state.logged})
      }else {
        alert('Check your username and password')
      }
    }else {
      alert('User not found.')
    }
  }

  render(){
    return (
      <div className="App">
        <Header handleLogin={this.handleLogin}
        handleUsernameChange={this.handleUsernameChange}
        handlePasswordChange={this.handlePasswordChange}
      />
        <p></p>
        <p></p>
        <br />
        <br />
        {this.state.logged ? <CardContainer characters = {this.state.simpsonsArray} /> : null}
      </div>
    )
  }

}

export default App;
