import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form Submitted", title);
    setTitle('')
  };

  return (
    <div>
      <form action="" onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Your Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
