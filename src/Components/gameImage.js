import { useEffect, useRef, useState } from "react";
import ContextMenu from "./contextMenu";
import Notification from "./notification";
import { firestore } from "../firebase/config";

function GameImage(props) {
  // use these coords to calculate menu position
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  // use these coords to calculate user answer
  const [coords, setCoords] = useState([0, 0]);
  const [showMenu, setShowMenu] = useState(false);
  const [names, setNames] = useState(["Snubbull", "Heatmor", "Shroomish"]);
  const [correct, setCorrect] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [progress, setProgress] = useState({
    easy: false,
    medium: false,
    hard: false,
  });

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

  useEffect(() => {
    if (!showToast) return;

    // hide notification after 3 seconds
    setTimeout(() => setShowToast(false), 3000);

    // check for win
    const result = Object.values(progress);
    const won = result.every((result) => result);

    // operations to perform after completing a level
    async function levelComplete() {
      props.setWin(true);

      setProgress({ easy: false, medium: false, hard: false });

      // unlock next level
      props.setUnlocked({ ...props.unlocked, [props.level + 1]: true });

      // get best time
      const timesRef = firestore.doc(`bestTimes/level-${props.level}`);
      const bestTime = await timesRef.get().then((doc) => doc.data());

      // check best time
      if (props.time > bestTime.time || bestTime.time === 0) {
        timesRef.update({
          time: props.time,
          user: "user",
        });
      }
    }

    if (won) {
      levelComplete();
    }
  }, [showToast, progress, props]);

  const imgRef = useRef();

  const hideToast = () => {
    setShowToast(false);
  };

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
        coords={coords}
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
