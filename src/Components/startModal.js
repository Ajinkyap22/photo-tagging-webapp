import Levels from "./levels";
import SignIn from "./signIn";

function StartModal(props) {
  return (
    <div className={props.start ? "modal" : "modal show"} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {props.user ? "Select a Level" : "Sign in To Continue"}
            </h5>
          </div>
          <div className="modal-body">
            {props.user ? (
              <Levels changeLevel={props.changeLevel}></Levels>
            ) : (
              <SignIn></SignIn>
            )}
          </div>
          <div className="modal-footer">
            {props.user ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={props.handleStart}
              >
                Start
              </button>
            ) : (
              <p>
                Sign in to keep your progress saved & record your highscore.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartModal;
