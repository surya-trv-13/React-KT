import React, { Component } from "react";

class LifeCycleExample extends Component {
  constructor() {
    super();
    console.log("Constructor");
    this.state = {
      data: "Anything"
    };
  }

  componentWillMount = () => {
    console.log("Will Mount");
  };

  componentDidMount = () => {
    console.log("Did Mount");
    this.setState({
      data: "Something"
    });
  };

  componentWillUpdate = (props, state) => {
    console.log("Will Update");
  };

  componentDidUpdate = (prevProp, state) => {
    if (prevProp.data !== this.props.data) {
    }
    console.log("Did Update");
  };

  render() {
    console.log("Render");
    return <h1>Lifecycle</h1>;
  }
}

export default LifeCycleExample;
