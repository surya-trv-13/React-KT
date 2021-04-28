import "./styles.css";
// import { ClassComponent } from "./component/ClassComponent";
import StateExample from "./component/StateExample";
import LifeCycleExample from "./component/LifeCycleMethods";

// Parent Component
export default function App() {
  // const object = ["x", "y"];
  return (
    <div className="App">
      <h1>React KT</h1>
      <h2>Class Component</h2>
      {/* <StateExample /> */}
      <LifeCycleExample />
      {/* <ClassComponent data="Data 1" data2="Anotehr" />
      <ClassComponent data="Data 2" />
      <ClassComponent data={object} />
      <ClassComponent /> */}
    </div>
  );
}
