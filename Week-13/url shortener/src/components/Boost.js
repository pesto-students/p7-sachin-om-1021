import React from "react";
export const bg=require("../images/black-image.jpg")
export default function Boost() {
  return (
    <div className="boost">
      <div className="boost-heading">
        <h1>Welcome to Shortify</h1>
        <p>Shorten your url like a pro on the go</p>
        <p>Fast,Easy and Secure</p>
        <button>Let's Go</button>
      </div>

      <div className="laptop-img">
        <img src={require("../images/Astronaut.png")}></img>
      </div>
    </div>
  );
}
