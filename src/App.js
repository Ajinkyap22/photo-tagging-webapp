import "./App.css";
import levelOne from "./images/level-1.jpg";
import levelTwo from "./images/level-3.jpg";
import levelThree from "./images/level-3.jpg";
import Navbar from "./Components/nav";
import Modal from "./Components/modal";
import StartModal from "./Components/startModal";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [start, setStart] = useState(false);

  function displayModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }

  function handleStart() {
    setStart(true);
  }

  return (
    <div className="App" onClick={show ? closeModal : null}>
      <Navbar start={start} displayModal={displayModal}></Navbar>
      <div className="container-fluid px-0">
        <img src={levelOne} alt="" className="img-fluid w-100" />
      </div>
      <Modal
        closeModal={closeModal}
        handleStart={handleStart}
        show={show}
        start={start}
      ></Modal>
      <StartModal start={start} handleStart={handleStart}></StartModal>
    </div>
  );
}

export default App;
