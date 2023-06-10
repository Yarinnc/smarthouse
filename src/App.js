import "./App.css";
import Test from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Rooms from "./components/Rooms";
import AddRoom from "./components/AddRoom";
import RoomDetail from "./components/RoomDetail";
import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

function App() {
  const [rooms, setRooms] = useState([]);

  const addNewRoom = (name, type, color) => {
    let temp = {
      roomName: name,
      roomType: type,
      roomColor: color,
      roomItems: [],
    };
    setRooms([...rooms, temp]);
  };

  const addNewItem = (index, item) => {
    const currentRoom = rooms[index];
    const isBathroom = currentRoom.roomType === "Bathroom";
    const isBoiler = item === "Boiler";

    if (isBathroom && isBoiler) {
      currentRoom.roomItems.push({ condition: false, type: item });
      setRooms([...rooms]);
    } else if (
      !isBathroom &&
      item === "Boiler" &&
      !currentRoom.roomItems.some((i) => i.type === "Boiler")
    ) {
      alert("Boiler can only be added to the bathroom.");
    } else if (
      item === "Stereo" &&
      currentRoom.roomItems.some((i) => i.type === "Stereo")
    ) {
      alert("Only one stereo is allowed per room.");
    } else if (currentRoom.roomItems.length <= 4) {
      currentRoom.roomItems.push({ condition: false, type: item });
      setRooms([...rooms]);
    } else {
      alert("You can only add 5 items per room.");
    }
  };
  const changeCondition = (roomIndex, itemIndex) => {
    rooms[roomIndex].roomItems[itemIndex].condition =
      !rooms[roomIndex].roomItems[itemIndex].condition;
    setRooms([...rooms]);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <div className="menu-div">
          <h1>Smart House</h1>
          <h5 className="dividers">Main</h5>
          <Link to="/homepage">
            <button className="main-btns">
              <FontAwesomeIcon icon={faHome} /> Homepage
            </button>
          </Link>
          <Link to="/addroom">
            <button className="main-btns">
              <FontAwesomeIcon icon={faPlus} /> New Room
            </button>
          </Link>

          <h5 className="dividers">Rooms</h5>
          <Link to="/">
            <Rooms rooms={rooms} />
          </Link>
        </div>
        <div className="rooms-div">
          <Routes>
            <Route path="/homepage" element={<Test />} />

            <Route
              path="/addroom"
              element={<AddRoom rooms={rooms} addNewRoom={addNewRoom} />}
            />
            {rooms.map((val, index) => {
              return (
                <Route
                  path={`room-${val.roomName}`}
                  element={
                    <RoomDetail
                      rooms={rooms}
                      index={index}
                      roomItems={rooms.roomItems}
                      key={index}
                      addNewItem={addNewItem}
                      changeCondition={changeCondition}
                    />
                  }
                />
              );
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
