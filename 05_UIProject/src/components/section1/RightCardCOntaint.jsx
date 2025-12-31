import React from "react";

function RightCardCOntaint(props) {
  return (
    <div>
      <div className="absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between ">
        <h2 className="bg-white rounded-full size-12 flex justify-center items-center text-2xl font-bold">
          {props.id + 1}
        </h2>
        <div>
          <p className="text-lg leading-normal text-white mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellat
            nostrum porro distinctio vero facilis!
          </p>
        </div>
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white font-medium px-7 py-3 rounded-full ">
            {props.tag}
          </button>
          <button className="bg-blue-500 text-white font-medium px-3 py-2 rounded-full">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightCardCOntaint;
