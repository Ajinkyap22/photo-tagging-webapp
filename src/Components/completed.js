import { useState } from "react";
import { firestore } from "../firebase/config";

function Completed(props) {
  const [userName, setUserName] = useState("");

  function handleUserName(e) {
    setUserName(e.target.value);
  }

  function saveUserName(e) {
    e.preventDefault();

    const timesRef = firestore.doc(`bestTimes/level-${props.level}`);

    timesRef.update({
      time: props.time,
      user: userName,
    });
  }
  return (
    <div className={props.win ? "modal show" : "modal"} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Congratulations! Level Completed.</h5>
          </div>
          <div className="modal-body">
            <p className="lead">
              Your Time:
              <span className="fw-bold text-danger">{` ${Math.floor(
                (props.time / 3600) % 60
              )
                .toString()
                .padStart(2, "0")}:${Math.floor((props.time / 60) % 60)
                .toString()
                .padStart(2, "0")}:${Math.floor(props.time % 60)
                .toString()
                .padStart(2, "0")}`}</span>
            </p>
            <p className={props.best ? "text-success" : ""}>
              {props.best
                ? "You just created a new time record!"
                : `Best Time: ${Math.floor((props.time / 3600) % 60)
                    .toString()
                    .padStart(2, "0")}:${Math.floor((props.time / 60) % 60)
                    .toString()
                    .padStart(2, "0")}:${Math.floor(props.time % 60)
                    .toString()
                    .padStart(2, "0")}`}
            </p>
            <form onSubmit={saveUserName}>
              <div className="my-2">
                <label htmlFor="username" className="form-label fw-bold">
                  Enter Your Username To Save Your Record
                </label>
                <input
                  type="text"
                  className="form-control w-50 m-auto"
                  id="username"
                  placeholder=""
                  required
                  maxLength="25"
                  onChange={handleUserName}
                />
                <button type="submit" className="btn btn-primary mt-3">
                  Save
                </button>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-primary"
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
