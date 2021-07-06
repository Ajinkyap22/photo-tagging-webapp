function ContextMenu(props) {
  return (
    <div
      className="btn-group-vertical btn-group-md p-3 menu"
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
        className="btn btn-dark border border-secondary rounded"
        onClick={props.handleMenu.bind(
          this,
          props.coords[0],
          props.coords[1],
          "easy"
        )}
        hidden={props.progress.easy ? true : false}
      >
        {props.names[0]}
      </button>

      <button
        type="button"
        className="btn btn-dark border border-secondary rounded"
        onClick={props.handleMenu.bind(
          this,
          props.coords[0],
          props.coords[1],
          "medium"
        )}
        hidden={props.progress.medium ? true : false}
      >
        {props.names[1]}
      </button>

      <button
        type="button"
        className="btn btn-dark border border-secondary rounded"
        onClick={props.handleMenu.bind(
          this,
          props.coords[0],
          props.coords[1],
          "hard"
        )}
        hidden={props.progress.hard ? true : false}
      >
        {props.names[2]}
      </button>
    </div>
  );
}

export default ContextMenu;
