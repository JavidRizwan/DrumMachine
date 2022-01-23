import "./App.scss";
import Drumpad from "./components/Drumpad.jsx";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const audioBank = [
    {
      key: "Q",
      audio: "./assets/Medium-Tom.mp3",
      name: "mid tom",
    },
    {
      key: "W",
      audio: "./assets/Floor-Tom.mp3",
      name: "floor tom",
    },
    {
      key: "E",
      audio: "./assets/Cymbal.mp3",
      name: "cymbal",
    },
    {
      key: "A",
      audio: "./assets/side_stick.mp3",
      name: "side stick",
    },
    {
      key: "S",
      audio: "./assets/Hi-Hat-Open.mp3",
      name: "open hi-hat",
    },
    {
      key: "D",
      audio: "./assets/Hi-Hat-Closed.mp3",
      name: "closed hi-hat",
    },
    {
      key: "Z",
      audio: "./assets/808-kick.mp3",
      name: "808 bass",
    },
    {
      key: "X",
      audio: "./assets/kick.mp3",
      name: "kick",
    },
    {
      key: "C",
      audio: "./assets/Snare.mp3",
      name: "snare",
    },
  ];

  const [keyName, setKeyName] = React.useState("Press any key mentioned below");

  return (
    <div className="App container-md">
      <div className="col" id="drum-machine">
        <h1 id="header" className="row justify-content-center">
          Drum Machine
        </h1>
        <p className="row justify-content-center" id="display">
          {keyName}
        </p>
        <Drumpad setKeyName={setKeyName} audioBank={audioBank} />
        <p id="footer" className="row justify-content-center">
          Made with ❤️
        </p>
      </div>
    </div>
  );
}

export default App;
