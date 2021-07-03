function Completed(props) {
  return (
    <div className={props.win ? "modal show" : "modal"} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Congratulations! Level Completed.</h5>
          </div>
          <div className="modal-body">
            <p>
              Your Time:
              {` ${Math.floor((props.time / 3600) % 60)
                .toString()
                .padStart(2, "0")}:${Math.floor((props.time / 60) % 60)
                .toString()
                .padStart(2, "0")}:${Math.floor(props.time % 60)
                .toString()
                .padStart(2, "0")}`}
            </p>
            <p>Best Time: 00:00:00</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={props.endGame}
            >
              Play Another Level
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Completed;
