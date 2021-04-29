import React, { useCallback, useEffect } from "react";

function Functional({ data }) {
  // props.data
  const [count, setCount] = React.useState(0);
  const [count1, setCount2] = React.useState(0);

  // useEffect
  useEffect(() => {
    console.log("Count Called", count1);
  }, [count1, count]);

  // useCallback

  return (
    <>
      <p>Count: {count}</p>
      <p>Count: {count1}</p>
      <h1>This is Functional Component {data}</h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <button onClick={() => setCount2(count1 + 2)}>Add 2</button>
    </>
  );
}

export default Functional;
