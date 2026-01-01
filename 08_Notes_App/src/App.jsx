import React from "react";

function App() {
  return (
    <div className="h-screen bg-black text-white ">
      <form action="" className="flex justify-between items-center p-10">
        <div className="flex gap-4 w-1/2 items-start flex-col">
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5 py-2 w-full border-2 rounded font-medium"
          />
          <textarea
            placeholder="Enter Note Details"
            className="px-5 py-2 w-full h-32 border-2 rounded font-medium"
          ></textarea>
          <button className="px-5 py-2 w-full bg-blue-500 text-white rounded font-medium">
            Add Notes
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
