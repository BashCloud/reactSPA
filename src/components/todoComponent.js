import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../actions/todoAction';
import { RequestBlock } from "./layout";

const API = 'https://jsonplaceholder.typicode.com/';
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
export let open = indexedDB.open("reactSPA", 1);
open.onupgradeneeded = function () {
  var db = open.result;
  db.createObjectStore("comments", { keyPath: "id", autoIncrement: true });
  db.createObjectStore("photos", { keyPath: "id", autoIncrement: true });
  db.createObjectStore("todos", { keyPath: "id", autoIncrement: true });
  db.createObjectStore("posts", { keyPath: "id", autoIncrement: true });
};
function addToDB(query, data) {
  var db = open.result;
  var tx = db.transaction(query, "readwrite");
  tx.objectStore(query).put(data);
  tx.oncomplete = function () {
    db.close();
  };
}
class Todos extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  fetchData(thhis) {
    // console.log(thhis);
    thhis.props.actions.todoSetStartTime();
    fetch(API + thhis.props.query)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => {
        thhis.props.actions.todoSetEndTime();
        let data = response.json()
        //   console.log(data);
        return data;
      })
      .then((items) => {
        thhis.props.actions.todoSetSaveStartTime();
        items.forEach((item) => {
          addToDB(thhis.props.query, item);
        });
        thhis.props.actions.todoSetSaveEndTime();
      })
    // .catch(() => this.setState({ hasErrored: true }));
  }
  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.fetchData(that);
    }, 5000);
  }
  restart() {
    console.log("Reloading data...");
    this.fetchData(this);
  }
  render() {
    // console.log("...");
    // console.log(this.props.data);
    // var that = this;
    return (
      <RequestBlock data={this.props}/>
    );
  }
}
function mapStateToProps(state, props) {
  return {
    startTime: state.todoSetStartTime,
    endTime: state.todoSetEndTime,
    saveStartTime: state.todoSetSaveStartTime,
    saveEndTime: state.todoSetSaveEndTime,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);