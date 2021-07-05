import "./App.css";

// Hooks
import { useState } from "react";

// Image imports
import levelOne from "./images/level-1.jpg";
import levelTwo from "./images/level-2.jpg";
import levelThree from "./images/level-3.jpg";

// Component imports
import Navbar from "./Components/nav";
import Modal from "./Components/modal";
import StartModal from "./Components/startModal";
import GameImage from "./Components/gameImage";
import Footer from "./Components/footer";
import Completed from "./Components/completed";

function App() {
  // to show pokemon model
  const [show, setShow] = useState(false);
  // to start level
  const [start, setStart] = useState(false);
  // to get current level
  const [level, setLevel] = useState(1);
  // to set background image
  const [background, setBackground] = useState(levelOne);
  // to check for win
  const [win, setWin] = useState(false);
  // to keep user's time score
  const [time, setTime] = useState(0);
  // to check if user has unlocked the level
  const [unlocked, setUnlocked] = useState({
    1: true,
    2: false,
    3: false,
  });
  // to keep track of how many pokemon user has found
  const [progress, setProgress] = useState({
    easy: false,
    medium: false,
    hard: false,
  });
  // to check for best time
  const [best, setBest] = useState(0);
  // to set username for highscore
  const [user, setUser] = useState("");

  // modal methods
  function displayModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }

  // game state methods
  function handleStart() {
    setStart(true);
    displayModal();
  }

  function endGame() {
    setStart(false);
    setWin(false);
    setTime(0);
    setProgress({
      easy: false,
      medium: false,
      hard: false,
    });
  }

  function changeLevel(level) {
    setLevel(level);
    setBackground(() => {
      if (level === 1) {
        return levelOne;
      } else if (level === 2) {
        return levelTwo;
      } else {
        return levelThree;
      }
    });
  }

  return (
    <div className="App" onClick={show ? closeModal : null}>
      <Navbar
        start={start}
        show={show}
        displayModal={displayModal}
        win={win}
        time={time}
        setTime={setTime}
        endGame={endGame}
      ></Navbar>

      <div className="container-fluid px-0">
        <GameImage
          background={background}
          level={level}
          setWin={setWin}
          setUnlocked={setUnlocked}
          unlocked={unlocked}
          time={time}
          setBest={setBest}
          setUser={setUser}
          progress={progress}
          setProgress={setProgress}
        ></GameImage>
      </div>

      <Modal show={show} start={start} level={level}></Modal>

      <StartModal
        start={start}
        changeLevel={changeLevel}
        handleStart={handleStart}
        unlocked={unlocked}
      ></StartModal>

      <Completed
        win={win}
        endGame={endGame}
        time={time}
        best={best}
        level={level}
        user={user}
      ></Completed>

      <div
        className="overlay"
        hidden={start && !show && !win ? true : false}
      ></div>

      <Footer></Footer>
    </div>
  );
}

export default App;
