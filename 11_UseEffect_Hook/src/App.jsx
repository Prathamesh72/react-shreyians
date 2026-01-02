import React, { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(100);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  // useEffect(() => {
  //   console.log("Use Effect running");
  // }, [num]);

  function aChanging() {
    console.log("A is changing");
  }

  function bChanging() {
    console.log("B is changing");
  }

  useEffect(() => {
    console.log("UseEffect is Running");
  }, [a]);

  return (
    <div>
      {/* <h1>{num}</h1>
      <h1>{num1}</h1>

      <button
        onMouseEnter={() => {
          setNum(num + 1);
        }}
        onMouseLeave={() => {
          setNum1(num1 + 10);
        }}
      >
        Hover
      </button> */}
      <h1>A is: {a}</h1>
      <h1>B is: {b}</h1>
      <button onClick={() => setA(a + 1)}>Change A</button>
      <button onClick={() => setB(b - 1)}>Change B</button>
    </div>
  );
}

export default App;
