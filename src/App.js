import "./styles.css";
import { ClassComponent } from "./component/ClassComponent";

// const App1 = () => {
//     App();
// }
// Parent Component
export default function App() {
  const object = ["x", "y"];
  return (
    <div className="App">
      <h1>React KT</h1>
      <h2>Class Component</h2>
      <ClassComponent data="Data 1" data2="Anotehr" />
      <ClassComponent data="Data 2" />
      <ClassComponent data={object} />
      <ClassComponent />
    </div>
  );
}
