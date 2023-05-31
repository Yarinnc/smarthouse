import React from "react";
import "./Homepage.css";
const Test = () => {
  return (
    <div className="welcome-div">
      <h1>Welcome to our smart home website.</h1>
      <h3>
        You can add the rooms in your house that will show on the menu on the
        left
      </h3>
      <br />
      <h3>
        Each room will be either a <span>Bedroom</span>, <span>Bathroom</span>{" "}
        or <span>Kitchen</span>.
      </h3>
      <br />
      <h3>
        Each room can have up to 5 smart tools that will be connected to this
        website, and can be controlled through here.
      </h3>
      <br />
      <h3>
        Only the <span>Bathroom</span> can have a <span>'Boiler'</span> item.
        Each room can have only 1 Stereo system.
      </h3>
      <br />
      <h3>
        Lastly, each room can only have 5 characters in it's name. Start adding
        rooms with the<span>'New Room'</span> button to your left.
      </h3>
    </div>
  );
};

export default Test;
