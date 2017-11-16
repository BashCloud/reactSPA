import React, { Component } from 'react';
import Clock from 'react-live-clock';
import logo from './logo.svg';
import './App.css';
// import open from './DBindexed';
const API = 'https://jsonplaceholder.typicode.com/';
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
export let open = indexedDB.open("reactSPA", 1);
open.onupgradeneeded = function() {
    var db = open.result;
    db.createObjectStore("comments",{keyPath: "id",autoIncrement: true });
    db.createObjectStore("photos",{keyPath: "id",autoIncrement: true });
    db.createObjectStore("todos",{keyPath: "id",autoIncrement: true });
    db.createObjectStore("posts",{keyPath: "id",autoIncrement: true });
};

function currentTime(){
  let time = new Date();
  time = time.toLocaleTimeString('en-IN', {hour12: false}) + "." + time.getMilliseconds();
  return time;
}

class RequestBlock extends React.Component {
  constructor() {
    super();
    this.state = {
        hasErrored: false,
        isLoading: false,
        startTime: '',
        endTime: '',
        saveStartTime: '',
        saveEndTime: ''
    };
  }
  addToDB(query,data) {
    var db = open.result;
    var tx = db.transaction(query, "readwrite"); 
    tx.objectStore(query).put(data); 
    tx.oncomplete = function() {
      db.close();
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
        .then((response) => {
          let data = response.json()
          return data;
        })
        .then((items) => {
          this.setState({endTime:currentTime()})
          this.setState({saveStartTime:currentTime()})
          items.forEach((item) => {
            this.addToDB(this.props.query,item);
          });
          this.setState({saveEndTime:currentTime()})
        })
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
          <td> {this.state.saveStartTime} </td>
        </tr>
        <tr>
          <td className="lable"> End Save:</td>
          <td> {this.state.saveEndTime} </td>
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
        <section id="content">
          <RequestBlock query="comments" />
          <RequestBlock query="photos" />
          <RequestBlock query="todos" />
          <RequestBlock query="posts" />
        </section>
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
