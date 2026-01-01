import React, { use } from "react";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [num, setNum] = useState({ user: "Sawant", age: 25 });
  const [num1, setNum1] = useState([10, 20, 30]);
  const [name, setName] = useState({ name: "Prathamesh", age: 28 });
  const [num2, setNum2] = useState(0);

  const btnClick = () => {
    const newNum = { ...num };
    newNum.user = "John";
    newNum.age = 30;
    setNum(newNum);
  };

  const newNum = () => {
    const newNum1 = [...num1];
    newNum1[0] = 100;
    setNum1(newNum1);
  };

  const changeName = () => {
    setName((prev) => ({ ...prev, name: "abc", age: 60 }));
  };

  const batchUpdate=() => {
setNum2()
  }

  return (
    <div>
      <h1>useState</h1>

      <h1>Counter Value: {counter} </h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <br />
      <br />
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <br />
      <br />

      <h1>
        {num.user},{num.age}
      </h1>
      <button onClick={btnClick}>Cick</button>
      <br />
      <br />

      <h1>{num1}</h1>
      <button onClick={newNum}>CLIcked..</button>
      <br />
      <br />

      <h1>
        {name.name},{name.age}
      </h1>
      <button onClick={changeName}>Clicked</button>
      <br /><br />

      <h1>
        {num2}
      </h1>
      <button onClick={batchUpdate}>Clicked</button>
      <br /><br />
    </div>
  );
}

export default App;
