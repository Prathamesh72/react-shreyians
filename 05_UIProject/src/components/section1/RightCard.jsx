import React from "react";
import RightCardCOntaint from "./RightCardCOntaint";

function RightCard(props) {
  return (
    <div className="h-full w-80 rounded-4xl overflow-hidden relative shrink-0">
      <img src={props.img} alt="" className="h-full" />
      <RightCardCOntaint id={props.id} tag={props.tag} />
    </div>
  );
}

export default RightCard;
