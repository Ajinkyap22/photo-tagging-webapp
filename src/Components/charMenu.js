function CharMenu(props) {
  return (
    <div
      className="btn-group-vertical btn-group-lg p-3"
      hidden={props.showMenu ? false : true}
      style={{ position: "absolute", top: props.yPos, left: props.xPos }}
    >
      <button type="button" className="btn btn-dark">
        {props.names[0]}
      </button>
      <button type="button" className="btn btn-dark">
        {props.names[1]}
      </button>
      <button type="button" className="btn btn-dark">
        {props.names[2]}
      </button>
    </div>
  );
}

export default CharMenu;
