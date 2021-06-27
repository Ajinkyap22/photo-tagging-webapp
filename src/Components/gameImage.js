import { useEffect, useRef, useState } from "react";
import ContextMenu from "./contextMenu";

function GameImage(props) {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [names, setNames] = useState(["Snubbull", "Heatmor", "Shroomish"]);

  const handleClick = (e) => {
    e.preventDefault();

    setXPos(e.pageX);
    setYPos(e.pageY);
    setShowMenu(!showMenu);
  };

  const imgRef = useRef();

  const handleMenu = (x, y) => {
    // const coords = [0.09903846153846153, 0.27424749163879597];

    const width = imgRef.current.offsetWidth;
    const height = imgRef.current.offsetHeight;
    const navHeight = +document.querySelector(".navbar").clientHeight;

    const relX = x / width;
    const relY = (y - navHeight) / height;

    // const testX = Math.abs(relX - coords[0]) < 0.02;
    // const testY = Math.abs(relY - coords[1]) < 0.02;
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
      ></ContextMenu>
    </div>
  );
}

export default GameImage;
