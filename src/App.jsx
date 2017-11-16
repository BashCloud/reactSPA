import React, { Component } from 'react';
import Clock from 'react-live-clock';
import logo from './logo.svg';
import './App.css';
const API = 'https://jsonplaceholder.typicode.com/';

function currentTime(){
  let time = new Date();
  time = time.toLocaleTimeString('en-IN', {hour12: false}) + "." + time.getMilliseconds();
  return time;
}

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
  constructor() {
    super();
    this.state = {
        hasErrored: false,
        isLoading: false,
        startTime: '',
        endTime: '',
    };
  }
  fetchData() {
    this.setState({ isLoading: true })
    this.setState({startTime:currentTime()})
    fetch(API + this.props.query)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            this.setState({ isLoading: false });
            return response;
        })
        .then((response) => response.json())
        .then((items) => this.setState({endTime:currentTime()})) // ES6 property value shorthand for { items: items }
        .catch(() => this.setState({ hasErrored: true }));
    }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <div className = "requestBlock">
      <span className="apiRef">{API + this.props.query}</span>
      <table><tbody>
        <tr>
          <td className="lable"> Start:</td>
          <td> {this.state.startTime} </td>
        </tr>
        <tr>
          <td className="lable"> End:</td>
          <td> {this.state.endTime} </td>
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
            <div className="resetButton" onClick={this.fetchData}> Restart </div>
          </td>
        </tr>
        </tbody>
      </table>  
      </div>  
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
          <RequestBlock query="comments" />
          <RequestBlock query="photos" />
          <RequestBlock query="todos" />
          <RequestBlock query="posts" />
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
