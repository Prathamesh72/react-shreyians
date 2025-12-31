import React from "react";

function NavBar() {
  return (
    <div className="flex items-center justify-between px-18 py-8">
      <h4 className="bg-black text-white px-4 py-3 rounded-full">
        TARGET AUDIENCE
      </h4>
      <button className="bg-gray-300 px-4 py-3 uppercase rounded-full tracking-widest text-sm">
        Digital Banking Platform
      </button>
    </div>
  );
}

export default NavBar;
