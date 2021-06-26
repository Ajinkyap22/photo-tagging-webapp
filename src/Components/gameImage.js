import { useEffect, useState } from "react";
import CharMenu from "./charMenu";

function GameImage(props) {
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [showMenu, setShowMenu] = useState(false);
  const [names, setNames] = useState(["Snubbull", "Heatmor", "Shroomish"]);

  const handleMenu = (e) => {
    e.preventDefault();

    setXPos(`${e.pageX}px`);
    setYPos(`${e.pageY}px`);
    setShowMenu(!showMenu);
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
    <div>
      <img
        src={props.background}
        alt=""
        className="img-fluid w-100"
        onClick={handleMenu}
      />
      <CharMenu
        xPos={xPos}
        yPos={yPos}
        showMenu={showMenu}
        names={names}
      ></CharMenu>
    </div>
  );
}

export default GameImage;
