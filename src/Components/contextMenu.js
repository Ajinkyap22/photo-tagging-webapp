function ContextMenu(props) {
  return (
    <div
      className="btn-group-vertical btn-group-md p-3"
      hidden={props.showMenu ? false : true}
      style={{
        position: "absolute",
        top: `${props.yPos}px`,
        left: `${props.xPos}px`,
        zIndex: 1040,
      }}
    >
      <button
        type="button"
        className="btn btn-dark"
        onClick={props.handleMenu.bind(this, props.xPos, props.yPos, "easy")}
        hidden={props.progress.easy ? true : false}
      >
        {props.names[0]}
      </button>
      <button
        type="button"
        className="btn btn-dark"
        onClick={props.handleMenu.bind(this, props.xPos, props.yPos, "medium")}
        hidden={props.progress.medium ? true : false}
      >
        {props.names[1]}
      </button>
      <button
        type="button"
        className="btn btn-dark"
        onClick={props.handleMenu.bind(this, props.xPos, props.yPos, "hard")}
        hidden={props.progress.hard ? true : false}
      >
        {props.names[2]}
      </button>
    </div>
  );
}

export default ContextMenu;
