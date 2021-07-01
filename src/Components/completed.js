function Completed(props) {
  return (
    <div className={props.win ? "modal show" : "modal"} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Congratulations! Level Completed.</h5>
          </div>
          <div className="modal-body">
            <p>Your Time:</p>
            <p>Best Time:</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Play Another Level
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={props.signOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Completed;
