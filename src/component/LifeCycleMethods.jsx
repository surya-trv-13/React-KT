import React, { Component } from "react";

class LifeCycleExample extends Component {
  constructor() {
    super();
    console.log("Constructor");
    this.state = {
      data: "Anything"
    };
  }

  // Only Once
  componentWillMount = () => {
    console.log("Will Mount");
  };

  componentDidMount = () => {
    console.log("Did Mount");
    this.setState({
      data: "Something"
    });
  };

  // Multiple times
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
    const { data, data1 } = this.props;
    return <h1>Lifecycle</h1>;
  }
}

export default LifeCycleExample;
