import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState(5);
  return (
    <div>
      <h1>Redux Toolkit</h1>

      <h1 className="m-5 font-bold text-2xl">Counter Value : {count}</h1>
      <button
        className="bg-blue-500 p-3 m-3 text-white rounded active:scale-95"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        className="bg-blue-500 p-3 m-3 text-white rounded active:scale-95"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
          console.log(e.target.value);
        }}
      />
      <button
        className="bg-blue-500 p-3 m-3 text-white rounded active:scale-95"
        onClick={() => {
          dispatch(incrementByAmount(Number(num)));
        }}
      >
        Increase By Amount
      </button>
    </div>
  );
}

export default App;
