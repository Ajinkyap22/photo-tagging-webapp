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
        disabled
      >
        Level 2
      </button>
      <button
        type="button"
        className="btn btn-danger mb-2"
        onClick={props.changeLevel.bind(null, 3)}
        disabled
      >
        Level 3
      </button>
    </div>
  );
}

export default Levels;
