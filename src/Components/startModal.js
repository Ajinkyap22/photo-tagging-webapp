function StartModal(props) {
  return (
    <div className={props.start ? "modal" : "modal show"} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Select a Level</h5>
          </div>
          <div className="modal-body">
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
              >
                Level 2
              </button>
              <button
                type="button"
                className="btn btn-danger mb-2"
                onClick={props.changeLevel.bind(null, 3)}
              >
                Level 3
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={props.handleStart}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartModal;
