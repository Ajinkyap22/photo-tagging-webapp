import { useEffect, useRef, useState } from "react";
import ContextMenu from "./contextMenu";
import Notification from "./notification";
import { firebase, firestore } from "../firebase/config";

function GameImage(props) {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [names, setNames] = useState(["Snubbull", "Heatmor", "Shroomish"]);
  const [correct, setCorrect] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [progress, setProgress] = useState({
    easy: false,
    medium: false,
    hard: false,
  });

  const hideToast = () => {
    setShowToast(false);
  };

  const handleClick = (e) => {
    e.preventDefault();

    setXPos(e.pageX);
    setYPos(e.pageY);
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showToast) return;

    // hide notification after 3 seconds
    setTimeout(() => setShowToast(false), 3000);

    // check for win
    const result = Object.values(progress);
    const won = result.every((result) => result);

    if (won) {
      props.setWin(true);
      setProgress({ easy: false, medium: false, hard: false });
    }
  }, [showToast, progress, props]);

  const imgRef = useRef();

  const handleMenu = async (x, y, id) => {
    const width = imgRef.current.offsetWidth;
    const height = imgRef.current.offsetHeight;
    const navHeight = +document.querySelector(".navbar").clientHeight;

    // Find relative coords to work for all screens
    const relX = x / width;
    const relY = (y - navHeight) / height;

    const path = `answers/level-${props.level}`;

    // get coords from firestore
    const answersRef = firestore.doc(path);
    const coords = await answersRef.get().then((doc) => doc.data());

    // Check if there's any relX coord matching user selected relX coord
    const userX = Math.abs(relX - coords[id].relX) < 0.02;

    // Check if there's any relY coord matching user selected relX coord
    const userY = Math.abs(relY - coords[id].relY) < 0.02;

    setShowMenu(false);

    if (userX && userY) {
      setCorrect(true);

      // remove the found pokemon from context menu
      setProgress({
        ...progress,
        [id]: true,
      });
    } else {
      setCorrect(false);
    }

    setShowToast(true);
  };

  useEffect(() => {
    if (props.level === 1) {
      setNames(["Snubbull", "Heatmor", "Shroomish"]);
    }

    if (props.level === 2) {
      setNames(["Bruxish", "Kricketot", "Combee"]);
    }

    if (props.level === 3) {
      setNames(["Charjabug", "Litwick", "Sewaddle"]);
    }
  }, [props.level]);

  return (
    <div ref={imgRef}>
      <img
        src={props.background}
        alt=""
        className="img-fluid w-100"
        onClick={handleClick}
      />

      <ContextMenu
        xPos={xPos}
        yPos={yPos}
        showMenu={showMenu}
        names={names}
        handleMenu={handleMenu}
        progress={progress}
      ></ContextMenu>

      <Notification
        correct={correct}
        hideToast={hideToast}
        showToast={showToast}
      ></Notification>
    </div>
  );
}

export default GameImage;
