import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActions from '../actions/postAction';

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
class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  fetchData(thhis) {
    console.log(thhis);
    thhis.props.actions.setStartTime();
    fetch(API + thhis.props.query)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => {
        thhis.props.actions.setEndTime();
        let data = response.json()
        //   console.log(data);
        return data;
      })
      .then((items) => {
        thhis.props.actions.setSaveStartTime();
        items.forEach((item) => {
          addToDB(thhis.props.query, item);
        });
        thhis.props.actions.setSaveEndTime();
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
    console.log(this.props.data);
    return (
      <div className="requestBlock">
        <span className="apiRef">{API + this.props.query}</span>
        <table><tbody>
          <tr>
            <td className="lable"> Start:</td>
            <td> {this.props.startTime} </td>
          </tr>
          <tr>
            <td className="lable"> End:</td>
            <td> {this.props.endTime} </td>
          </tr>
          <tr>
            <td className="lable"> Start Save:</td>
            <td> {this.props.saveStartTime} </td>
          </tr>
          <tr>
            <td className="lable"> End Save:</td>
            <td> {this.props.saveEndTime} </td>
          </tr>
          <tr><td colSpan="2">
            <div className="resetButton" onClick={this.restart}> Restart </div>
          </td>
          </tr>
        </tbody>
        </table>
      </div>
    );
  }
}
function mapStateToProps(state, props) {
  return {
    data: state,
    post: state.posts,
    startTime: state.setStartTime,
    endTime: state.setEndTime,
    saveStartTime: state.setSaveStartTime,
    saveEndTime: state.setSaveEndTime,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);