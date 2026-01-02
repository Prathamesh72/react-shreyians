import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar2() {
  const navigate = useNavigate();
  return (
    <div className="px-2 py-4 bg-gray-500">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-blue-600 rounded px-5 py-3 m-2 cursor-pointer active:scale-95"
      >
        Go To Home
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-blue-600 rounded px-5 py-3 m-2 cursor-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-blue-600 rounded px-5 py-3 m-2 cursor-pointer active:scale-95"
      >
        Forward
      </button>
    </div>
  );
}

export default NavBar2;
