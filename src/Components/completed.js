import { useEffect, useState } from "react";
import { firestore } from "../firebase/config";

function Completed(props) {
  // to set user's name from input
  const [userName, setUserName] = useState("");
  // to show record saved notification
  const [notify, setNotify] = useState(false);

  function handleUserName(e) {
    setUserName(e.target.value);
  }

  function handleNotify() {
    setNotify(false);
  }

  // save record in db
  function saveUserName(e) {
    e.preventDefault();

    const timesRef = firestore.doc(`bestTimes/level-${props.level}`);

    timesRef.update({
      time: props.time,
      user: userName,
    });

    setNotify(true);

    // clear input field
    document.querySelector("#username").value = "";
  }

  // to hide notification after 3 secnods
  useEffect(() => {
    if (!notify) return;

    setTimeout(() => setNotify(false), 3000);
  });

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

            <p className="text-success">
              {props.best >= props.time
                ? "You just created a new time record!"
                : `Best Time: ${Math.floor((props.best / 3600) % 60)
                    .toString()
                    .padStart(2, "0")}:${Math.floor((props.best / 60) % 60)
                    .toString()
                    .padStart(2, "0")}:${Math.floor(props.best % 60)
                    .toString()
                    .padStart(2, "0")} - ${props.user}`}
            </p>

            <form
              onSubmit={saveUserName}
              hidden={props.best >= props.time ? false : true}
            >
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

            <div
              className="position-fixed bottom-0 m-5 end-0"
              style={{ maxWidth: "300px" }}
            >
              <div
                className="notification align-items-center border-0 bg-primary text-light"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                hidden={notify ? false : true}
              >
                <div className="d-flex">
                  <div
                    className="text-center flex-grow-1"
                    style={{ padding: ".75rem" }}
                  >
                    Your record has been saved
                  </div>

                  <button
                    type="button"
                    className="btn-close me-2 m-auto"
                    aria-label="Close"
                    onClick={handleNotify}
                  ></button>
                </div>
              </div>
            </div>
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
