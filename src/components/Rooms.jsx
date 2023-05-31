import React from "react";
import { Link } from "react-router-dom";
import "./Rooms.css";
const Rooms = (props) => {
  return (
    <div>
      {props.rooms.map((val) => {
        return (
          <Link to={`room-${val.roomName}`}>
            <button
              className="room-btns"
              style={{ backgroundColor: val.roomColor }}
            >
              {val.roomName}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default Rooms;
