import React, { Component } from "react";

class StateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
      count: 0
    };
  }
  // state = {
  //   data: 0
  // };
  // add = 0;

  handleUpdate = () => {
    // this.add = this.add + 1;
    this.setState(
      (prevState) => {
        return { data: prevState.data + 1 };
      },
      () => {
        console.log("Inside Data", this.state.data);
      }
    );
    console.log("Data", this.state.data, this.add);
  };

  handleUpdate2 = () => {
    this.handleUpdate();
    this.handleUpdate();
  };

  render() {
    console.log("Re Rendered");

    return (
      <div>
        <h2>{this.state.data}</h2>
        {/* <h2>{this.add}</h2> */}
        <button onClick={this.handleUpdate}>Add 1</button>
        <button onClick={this.handleUpdate2}>Add 2</button>
      </div>
    );
  }
}

export default StateExample;
