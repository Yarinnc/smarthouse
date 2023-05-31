import React, { useState } from "react";
import "./AddRoom.css";
import { useNavigate } from "react-router-dom";

const AddRoom = (props) => {
  const [roomName, setRoomName] = useState("");
  const [roomType, setRoomType] = useState("N/A");
  const [roomColor, setRoomColor] = useState("#add8e6");

  const nav = useNavigate();
  const errorMsg = () => {
    if (roomName === "" || roomType === "N/A") {
      return (
        <div>
          <p style={{ color: "red" }}>
            You have to choose room type and name it with at least 1 character.
            Room color will be lightblue by default.
          </p>
        </div>
      );
    }
  };
  return (
    <div className="add-room">
      <label htmlFor="type">Choose Room:</label>
      <hr />
      <select
        className="type"
        name="type"
        onChange={(e) => {
          setRoomType(e.target.value);
        }}
      >
        <option value="N/A">N/A</option>
        <option value="Bathroom">Bathroom</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Bedroom">Bedroom</option>
      </select>
      <input
        type="text"
        placeholder="Enter Name"
        maxLength={5}
        onChange={(e) => {
          setRoomName(e.target.value);
        }}
      />
      <label htmlFor="colorInp">Pick a Color</label>
      <hr />
      <input
        name="colorInp"
        type="color"
        defaultValue={roomColor}
        onChange={(e) => {
          setRoomColor(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (roomType === "N/A" || roomName === "") {
            alert("ERROR");
            nav("/homepage");
          } else {
            props.addNewRoom(roomName, roomType, roomColor);
            nav("/homepage");
          }
        }}
      >
        Add
      </button>
      {errorMsg()}
    </div>
  );
};

export default AddRoom;
