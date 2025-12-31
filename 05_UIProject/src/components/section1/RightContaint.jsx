import React from "react";
import RightCard from "./RightCard";

function RightContaint(props) {
  return (
    <div id="right" className="h-full w-3/4 p-6 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl">
      {props.users.map(function (elem, index) {
        return (
          <RightCard key={index} id={index} img={elem.img} tag={elem.tag} />
        );
      })}
    </div>
  );
}

export default RightContaint;
