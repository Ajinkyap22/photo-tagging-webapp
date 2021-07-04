function Levels(props) {
  return (
    <div className="btn-group-vertical w-100">
      <button
        type="button"
        className="btn btn-success mb-2"
        onClick={props.changeLevel.bind(null, 1)}
      >
        Level 1
      </button>
      <button
        type="button"
        className="btn btn-warning mb-2"
        onClick={props.changeLevel.bind(null, 2)}
        disabled={props.unlocked["2"] ? "" : true}
      >
        Level 2{" "}
        <i
          className="bi bi-lock-fill"
          hidden={props.unlocked["2"] ? true : false}
        ></i>
      </button>
      <button
        type="button"
        className="btn btn-danger mb-2"
        onClick={props.changeLevel.bind(null, 3)}
        disabled={props.unlocked["3"] ? "" : true}
      >
        Level 3{" "}
        <i
          className="bi bi-lock-fill"
          hidden={props.unlocked["3"] ? true : false}
        ></i>
      </button>
    </div>
  );
}

export default Levels;
