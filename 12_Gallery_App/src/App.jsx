import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const responce = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setUserData(responce.data);
    console.log(responce.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-500 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading....
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map((elem, index) => (
      <div key={index}>
        <Card elem={elem} />
      </div>
    ));
  }

  return (
    <div className="bg-black h-screen text-white p-4 overflow-auto">
      <div className="flex flex-wrap gap-4 py-2">{printUserData}</div>
      <div className="flex justify-center items-center p-4 gap-6">
        <button
          style={{ opacity: index === 1 ? 0.5 : 1 }}
          className="bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95"
          onClick={() => {
            console.log("Prev Button Click");
            if (index > 1) {
              setIndex(index - 1);
            }
          }}
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button
          className="bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95"
          onClick={() => {
            console.log("Next Button Click");
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
