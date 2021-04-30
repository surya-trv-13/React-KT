import "./styles.css";
// import { ClassComponent } from "./component/ClassComponent";
// import StateExample from "./component/StateExample";
// import LifeCycleExample from "./component/LifeCycleMethods";
// import Functional from "./component/Functional";
import Component1 from "./component/Component1";
import Component2 from "./component/Component2";
// Parent Component
export default function App() {
  // const object = ["x", "y"];
  return (
    <div className="App">
      <h1>React KT</h1>
      <h2>Redux</h2>

      <Component1 />
      <Component2 />
      {/* <Functional data="Prop Value" /> */}
      {/* <StateExample /> */}
      {/* <LifeCycleExample /> */}
      {/* <ClassComponent data="Data 1" data2="Anotehr" />
      <ClassComponent data="Data 2" />
      <ClassComponent data={object} />
      <ClassComponent /> */}
    </div>
  );
}
