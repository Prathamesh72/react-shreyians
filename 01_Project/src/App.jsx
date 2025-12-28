import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="parent">
      <h1>Hello, World!</h1>
      <Card user="Sawant" age="20"/>
      <Card user="Bittu" age="27"/>
    </div>
  );
}

export default App;
