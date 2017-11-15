import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class CurrentStamp extends React.Component{
  render(){
    let time = new Date()
    return(
      // <div id="currentStamp">
        
      // </div>
      time.toISOString()
    )
  }
}

class RequestStamp extends React.Component{
  render(){
    let time = new Date()
    return(
      time.toLocaleTimeString('en-US', {hour12: false}) + "." +
      time.getMilliseconds()
    )
  }
}

class RequestBlock extends React.Component {
  render() {
    return (
      <div className = "requestBlock">
      <table>
        <tr>
          <td class="lable"> Start:</td>
          <td> <RequestStamp /> </td>
        </tr>
        <tr>
          <td class="lable"> End:</td>
          <td> <RequestStamp /> </td>
        </tr>
        <tr>
          <td class="lable"> Start Save:</td>
          <td> <RequestStamp /> </td>
        </tr>
        <tr>
          <td class="lable"> End Save:</td>
          <td> <RequestStamp /> </td>
        </tr>
        <tr><td colSpan="2">
            <div className="resetButton"> Restart </div>
          </td>
        </tr>
      </table>  
      </div>  
      // <h1>Hello, {this.props.name}</h1>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React SPA</h1>
        </header>
        
          <RequestBlock name="Sara" />
          <RequestBlock name="Sara" />
          <RequestBlock name="Sara" />
          <RequestBlock name="Sara" />
        <div id="currentStamp">
          <CurrentStamp />
        </div>
      </div>
    );
  }
}

export default App;
