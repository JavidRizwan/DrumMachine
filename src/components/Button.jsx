import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Button = ({ setKeyName, audioBank, keyId }) => {
  const playSound = () => {
    setKeyName(audioBank[keyId].name);
    const audio = document.getElementById(audioBank[keyId].key);
    audio.currentTime = 0;
    audio.play();
  };
  const handleClick = () => {
    playSound();
  };

  const handleKeyDown = (event) => {
    const key = event.key.toUpperCase();
    if (key === audioBank[keyId].key) {
      playSound();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <button
      className="drum-pad col btn btn-dark text-light col-3 col-lg-2"
      onClick={handleClick}
      id={audioBank[keyId].name}
    >
      <p>{audioBank[keyId].key}</p>
      <audio
        className="clip"
        id={audioBank[keyId].key}
        src={audioBank[keyId].audio}
      ></audio>
    </button>
  );
};

export default Button;
