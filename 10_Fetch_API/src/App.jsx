import React from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  // With Fetch
  async function getData() {
    const responce = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await responce.json();

    console.log(data);
  }

  // with Axios
  async function getDataAxios() {
    const responce = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setData(responce.data);
  }

  return (
    <div>
      <button onClick={getData}>Click</button>
      <br />
      <br />
      <button onClick={getDataAxios}>Click</button>
      <br />
      <br />
      <div>
        {data.map((elem, index) => (
          <div key={index}>
            <table border={2}>
              <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
              </tr>
              <tr>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td>{elem.username}</td>
                <td>{elem.email}</td>
              </tr>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
