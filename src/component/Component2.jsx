import React from "react";
import { connect } from "react-redux";
import { setValue } from "../actions/setValueAction";

const Component2 = ({ setInputValue }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return <input type="text" onChange={handleChange} />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setInputValue: (data) => dispatch(setValue(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component2);
