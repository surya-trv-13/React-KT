import React from "react";
import { connect } from "react-redux";

const Component1 = ({ value }) => {
  return <h1>Value is : {value}</h1>;
};

const mapStateToProps = (state) => ({
  value: state.inputValueReducer.data
});

export default connect(mapStateToProps, null)(Component1);
