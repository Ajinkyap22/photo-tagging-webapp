// react imports
import { useEffect, useRef, useState } from "react";
// component imports
import ContextMenu from "./contextMenu";
import Notification from "./notification";
import { firestore } from "../firebase/config";

function GameImage(props) {
  // use these coords to calculate menu position
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  // use these coords to calculate user answer
  const [coords, setCoords] = useState([0, 0]);
  // to show context menu
  const [showMenu, setShowMenu] = useState(false);
  // to set pokemon names for eacg level
  const [names, setNames] = useState(["Snubbull", "Heatmor", "Shroomish"]);
  // to check if guess is correct
  const [correct, setCorrect] = useState(false);
  // to show notification toast
  const [showToast, setShowToast] = useState(false);
  // to keep track of how many pokemon user has found

  const imgRef = useRef();

  // for hiding notification toast
  const hideToast = () => {
    setShowToast(false);
  };

  // for handling image click
  const handleClick = (e) => {
    e.preventDefault();

    // To prevent the menu from going outside the screen width/height
    if (imgRef.current.offsetWidth - e.pageX < 144) {
      setXPos(e.pageX - 144);
    } else {
      setXPos(e.pageX);
    }

    if (imgRef.current.offsetHeight - e.pageY < 143) {
      setYPos(e.pageY - 143);
    } else {
      setYPos(e.pageY);
    }

    setCoords([e.pageX, e.pageY]);

    setShowMenu(!showMenu);
  };

  // for setting pokemon names for each level
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

  // for hiding notification after 3 seconds
  useEffect(() => {
    if (!showToast) return;

    // hide notification after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  }, [showToast]);

  // for winning scenarios
  useEffect(() => {
    // check for win
    const result = Object.values(props.progress);
    const won = result.every((result) => result);

    // operations to perform after completing a level
    async function levelComplete() {
      // set progress back to initial state
      props.setProgress({ easy: false, medium: false, hard: false });

      // unlock next level
      props.setUnlocked({ ...props.unlocked, [props.level + 1]: true });

      // get best time
      const timesRef = firestore.doc(`bestTimes/level-${props.level}`);
      const bestTime = await timesRef.get().then((doc) => doc.data());

      // check best time
      if (props.time < bestTime.time || bestTime.time === 0) {
        props.setBest(props.time);
      } else {
        props.setBest(bestTime.time);
        props.setUser(bestTime.user);
      }

      props.setWin(true);
    }

    if (won) {
      levelComplete();
    }
  }, [props]);

  // for handling menu click
  const handleMenu = async (x, y, id) => {
    // get width & height of image
    const width = imgRef.current.offsetWidth;
    const height = imgRef.current.offsetHeight;
    // navbar height to subtract
    const navHeight = +document.querySelector(".navbar").clientHeight;

    // Find relative coords to work for all screens
    const relX = x / width;
    const relY = (y - navHeight) / height;

    // get coords from firestore
    const path = `answers/level-${props.level}`;
    const coords = await firestore
      .doc(path)
      .get()
      .then((doc) => doc.data());

    // Check if there's any relX coord matching user selected relX coord
    const userX = Math.abs(relX - coords[id].relX) < 0.02;

    // Check if there's any relY coord matching user selected relX coord
    const userY = Math.abs(relY - coords[id].relY) < 0.02;

    // hide context menu after clicking
    setShowMenu(false);

    // check for correct answer
    if (userX && userY) {
      setCorrect(true);

      // remove the found pokemon from context menu
      props.setProgress({
        ...props.progress,
        [id]: true,
      });
    } else {
      setCorrect(false);
    }

    setShowToast(true);
  };

  return (
    <div ref={imgRef}>
      <img
        src={props.background}
        alt=""
        className="img-fluid w-100"
        onClick={handleClick}
        style={{ objectFit: "cover" }}
      />

      <ContextMenu
        xPos={xPos}
        yPos={yPos}
        coords={coords}
        showMenu={showMenu}
        names={names}
        handleMenu={handleMenu}
        progress={props.progress}
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
