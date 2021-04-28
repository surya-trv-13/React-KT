import React from "react";
// let v3 = "LET"
// const variable1 = "Constatn";

// Child Component
class ClassComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  // obj = { RAM: "rAM", sHYAM: "sHAM" };

  check = () => {
    const variable1 = "Contant";
    let v2 = "Let";
    var v3 = "Var";
    return v3;
  };

  // check2 = () => {
  //   console.log(variable1);
  //   console.log(v3);
  // }

  render() {
    let { data, data2 } = this.props;
    // let { RAM, sHAM } = this.obj; //' Object Destructuring
    // RAM = "Surya";
    data = "Surya";
    // console.log(RAM);
    // const v3 = this.check();
    return (
      <h1>
        This is Class Component {data} {data2}
      </h1>
    );
  }
}

export { ClassComponent };
//
