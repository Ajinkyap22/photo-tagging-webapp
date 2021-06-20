function StartModal(props) {
  return (
    <div
      className={props.start ? "modal fade" : "modal fade show"}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Pokemon To Find</h5>
          </div>
          <div className="modal-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Pokemon 1</li>
              <li className="list-group-item">Pokemon 2</li>
              <li className="list-group-item">Pokemon 3</li>
            </ul>
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
