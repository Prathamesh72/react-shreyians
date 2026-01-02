import React from "react";

function Card(props) {
  return (
    <div>
      <a href={props.elem.url} target="_blank" rel="noreferrer">
        <div className="h-40 w-44 rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={props.elem.download_url}
            alt=""
          />
        </div>
        <h2 className="font-bold text-m">{props.elem.author}</h2>
      </a>
    </div>
  );
}

export default Card;
