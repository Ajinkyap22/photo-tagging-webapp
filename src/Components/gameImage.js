import { useEffect, useRef, useState } from "react";
import ContextMenu from "./contextMenu";

function GameImage(props) {
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [showMenu, setShowMenu] = useState(false);
  const [names, setNames] = useState(["Snubbull", "Heatmor", "Shroomish"]);

  const handleClick = (e) => {
    e.preventDefault();

    setXPos(`${e.pageX}px`);
    setYPos(`${e.pageY}px`);
    setShowMenu(!showMenu);
  };

  const imgRef = useRef();

  const handleMenu = (x, y) => {
    const width = imgRef.current.offsetWidth;
    const height = imgRef.current.offsetHeight;
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
