import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1766860891078-3aeb5647953f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <h1>{props.user}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus atque
        error voluptas deleniti ad, debitis officia harum adipisci inventore,
        aspernatur veniam ullam iusto itaque. Accusamus dignissimos
        necessitatibus nulla quibusdam ex!
      </p>
      <button>View</button>
    </div>
  );
}

export default Card;
