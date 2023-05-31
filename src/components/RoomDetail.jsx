import React from "react";
import AddItem from "./AddItem";
import { useState } from "react";

import "./RoomDetail.css";
const RoomDetail = (props) => {
  const [flag, setFlag] = useState(false);

  const showBtn = () => {
    if (flag) {
      return (
        <div>
          <AddItem
            addNewItem={props.addNewItem}
            index={props.index}
            changeFlag={changeFlag}
            rooms={props.rooms}
          />
        </div>
      );
    } else {
      return (
        <div>
          <button className="add-btn" onClick={changeFlag}>
            Add Item
          </button>
        </div>
      );
    }
  };
  const changeFlag = () => {
    setFlag(!flag);
  };
  return (
    <div className="room-detail">
      <h1>
        <span> Name:</span> {props.rooms[props.index].roomName}
        {"    "}
        <span>Type: </span>
        {props.rooms[props.index].roomType}
      </h1>
      <div className="item-div">
        {props.rooms[props.index].roomItems.map((val, index) => {
          let condition = val.condition
            ? "rgba(50, 221, 50, 0.5)"
            : "rgba(255, 5, 5, 0.8)";
          return (
            <button
              style={{ backgroundColor: condition }}
              onClick={() => {
                props.changeCondition(props.index, index);
              }}
            >
              {val.type}
            </button>
          );
        })}
      </div>
      <hr />
      {showBtn()}
    </div>
  );
};

export default RoomDetail;
