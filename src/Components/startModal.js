import Levels from "./levels";

function StartModal(props) {
  return (
    <div className={props.start ? "modal" : "modal show"} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-light bg-gradient">
          <div className="modal-header">
            <h5 className="modal-title">Select a Level</h5>
          </div>

          <div className="modal-body">
            <Levels
              changeLevel={props.changeLevel}
              unlocked={props.unlocked}
            ></Levels>
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
