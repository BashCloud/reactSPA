import React, { Component } from 'react';
import Clock from 'react-live-clock';
import logo from './logo.svg';
import './App.css';
const API = 'https://jsonplaceholder.typicode.com/';
let DEFAULT_QUERY = 'comments';

class RequestStamp extends React.Component{
  render(){
    let time = new Date()
    return(
      time.toLocaleTimeString('en-IN', {hour12: false}) + "." +
      time.getMilliseconds()
    )
  }
}

class RequestBlock extends React.Component {
  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => console.log(response.json()))
      // .then(data => this.setState({ hits: data.hits }));
  }
  render() {
    return (
      <div className = "requestBlock">
      <table><tbody>
        <tr>
          <td className="lable"> Start:</td>
          <td> <RequestStamp /> </td>
        </tr>
        <tr>
          <td className="lable"> End:</td>
          <td> <RequestStamp /> </td>
        </tr>
        <tr>
          <td className="lable"> Start Save:</td>
          <td> <RequestStamp /> </td>
        </tr>
        <tr>
          <td className="lable"> End Save:</td>
          <td> <RequestStamp /> </td>
        </tr>
        <tr><td colSpan="2">
            <div className="resetButton"> Restart </div>
          </td>
        </tr>
        </tbody>
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
        <footer className="App-footer">  
          <div id="UNIXstamp">
            Current UNIX Timestamp: 
            <Clock format={"x"}
              ticking={true} interval={100} />
            <span className="stampInfo"> mili-seconds since 01 Jan 1970 </span>
          </div>
          <div id="currentStamp">
            <Clock format={"dddd, Do MMMM YYYY, h:mm:ss.SSS A"}
              ticking={true} interval={100} />
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
