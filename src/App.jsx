import React, { Component } from 'react';
import Clock from 'react-live-clock';
import logo from './logo.svg';
import './App.css';
import Posts from "./components/postComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React SPA</h1>
        </header>
        <section id="content">
          {/* <RequestBlock query="comments" />
          <RequestBlock query="photos" />
          <RequestBlock query="todos" />
          <RequestBlock query="posts" /> */}
          <Posts query="posts" />
          {/* <Posts query="posts"/> */}
        </section>
        <footer className="App-footer">
          <div id="UNIXstamp">
            Current UNIX Timestamp:
            <Clock format={"x"} ticking={true} interval={100} />
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
