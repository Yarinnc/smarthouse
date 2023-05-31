import React, { useState } from "react";
import "./AddItem.css";
const AddItem = (props) => {
  const [item, setItem] = useState("N/A");

  const addItemFunc = () => {
    if (item !== "N/A") {
      props.addNewItem(props.index, item);
      props.changeFlag();
    }
  };
  return (
    <div>
      <label htmlFor="items">Choose Item: </label>
      <select
        name="items"
        onChange={(e) => {
          setItem(e.target.value);
        }}
      >
        <option value="N/A">N/A</option>
        <option value="AC">AC</option>
        <option value="Lamp">Lamp</option>
        <option value="Stereo">Stereo</option>
        <option value="Boiler">Boiler</option>
      </select>
      <button className="item-btn" onClick={addItemFunc}>
        Add Item
      </button>
    </div>
  );
};

export default AddItem;
