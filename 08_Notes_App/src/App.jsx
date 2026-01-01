import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    console.log(copyTask);

    setTitle("");
    setDetails("");
  };

  function deleteNotes(index) {
    const copyTask = [...task];
    copyTask.splice(index, 1);
    setTask(copyTask);
  }
  return (
    <div className="h-screen bg-black text-white p-10 lg:flex">
      <form
        onSubmit={(e) => submitHandler(e)}
        action=""
        className="flex gap-4 flex-col items-start p-10 lg:w-1/2"
      >
        <h1 className="text-3xl font-bold ">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 w-full border-2 rounded font-medium"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          placeholder="Enter Note Details"
          className="px-5 py-2 w-full h-32 border-2 rounded font-medium"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className="px-5 py-2 w-full bg-blue-500 text-white rounded font-medium active:bg-blue-800 active:scale-95">
          Add Notes
        </button>
      </form>
      <div className=" p-10 lg:border-l-2 lg:w-1/2">
        <h1 className="text-3xl font-bold ">Your Recent Notes</h1>

        <div className="flex flex-wrap gap-5 mt-6 h-[90%] overflow-auto items-start justify-start ">
          {task.map((elem, index) => {
            return (
              <div
                key={index}
                className="size-55 rounded-xl bg-white text-black p-4 relative"
              >
                <h2
                  className="absolute top-2 right-5 bg-red-600 p-3 text-xm rounded-full cursor-pointer"
                  onClick={() => deleteNotes(index)}
                >
                  X
                </h2>
                <h2 className="leading-tight text-xl font-bold">
                  {elem.title}
                </h2>
                <p className="mt-2 leading-tight font-medium text-gray-600">
                  {elem.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
