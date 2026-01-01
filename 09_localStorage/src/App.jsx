import React from "react";

function App() {
  // localStorage.setItem("name", "Prathamesh");
  // let getItem = localStorage.getItem("name");
  // console.log(getItem);

  // localStorage.removeItem("color"); //remove single Item

  // localStorage.clear(); // remove all

  const user = {
    name: "Prathamesh",
    age: 28,
    city: "Ratnagiri",
  };

  localStorage.setItem("user", JSON.stringify(user)); //To store object in localstorage
  const user1 = JSON.parse(localStorage.getItem("user"));
  console.log(user1);

  return <div>App</div>;
}

export default App;
