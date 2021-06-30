import "./App.css";

// Hooks
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

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

// firebase imports
import { firebase, auth, firestore } from "./firebase/config";

function App() {
  const [show, setShow] = useState(false);
  const [start, setStart] = useState(false);
  const [level, setLevel] = useState(1);
  const [background, setBackground] = useState(levelOne);

  const [user] = useAuthState(auth);

  function signOut() {
    auth.signOut();
    setStart(false);
  }

  function displayModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }

  function handleStart() {
    setStart(true);
    displayModal();
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
    <div className="App " onClick={show ? closeModal : null}>
      <Navbar
        start={start}
        show={show}
        displayModal={displayModal}
        user={user}
        signOut={signOut}
      ></Navbar>

      <div className="container-fluid px-0">
        <GameImage background={background} level={level}></GameImage>
      </div>

      <Modal
        closeModal={closeModal}
        handleStart={handleStart}
        show={show}
        start={start}
        level={level}
      ></Modal>

      <StartModal
        start={start}
        changeLevel={changeLevel}
        handleStart={handleStart}
        user={user}
      ></StartModal>

      <div className="overlay" hidden={start && !show ? true : false}></div>

      <Footer></Footer>
    </div>
  );
}

export default App;
