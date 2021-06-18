import "./App.css";
import main from "./images/main.jpg";
import Navbar from "./Components/nav";
import Modal from "./Components/modal";
import { useState } from "react";

// Create navbar
// Rest of the container with main pic
// A unique cursor
// A menu on clicking

function App() {
  const [show, setShow] = useState(true);
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
        <img src={main} alt="" className="img-fluid w-100" />
      </div>
      <Modal
        closeModal={closeModal}
        handleStart={handleStart}
        show={show}
      ></Modal>
    </div>
  );
}

export default App;
