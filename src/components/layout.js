import React, { Component } from 'react';
const API = 'https://jsonplaceholder.typicode.com/';

export class RequestBlock extends Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }
    render() {
    return(
        <div className="requestBlock">
        <span className="apiRef">{API + this.props.data.query}</span>
        <table><tbody>
          <tr>
            <td className="lable"> Start:</td>
            <td> {this.props.data.startTime} </td>
          </tr>
          <tr>
            <td className="lable"> End:</td>
            <td> {this.props.data.endTime} </td>
          </tr>
          <tr>
            <td className="lable"> Start Save:</td>
            <td> {this.props.data.saveStartTime} </td>
          </tr>
          <tr>
            <td className="lable"> End Save:</td>
            <td> {this.props.data.saveEndTime} </td>
          </tr>
          <tr><td colSpan="2">
            <div className="resetButton" 
            // onClick={this.fetchData}
            > Restart </div>
          </td>
          </tr>
        </tbody>
        </table>
      </div>
    )
  }
}