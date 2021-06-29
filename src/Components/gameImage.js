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
    // const answers = [
    //   {
    //     easy: [0.09903846153846153, 0.2762541806020067],
    //     medium: [0.9621942179392142, 0.6884992264053635],
    //     hard: [0.30689399555226093, 0.8700361010830325],
    //   },
    //   {
    //     easy: [0.9132690882134915, 0.2099802371541502],
    //     medium: [0.22757598220904374, 0.6709486166007905],
    //     hard: [0.38695329873980727, 0.6798418972332015],
    //   },
    //   {
    //     easy: [0.5871015567086731, 0.2140449438202247],
    //     medium: [0.3971153846153846, 0.2612021857923497],
    //     hard: [0.6041512231282431, 0.568539325842696],
    //   },
    // ];

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
