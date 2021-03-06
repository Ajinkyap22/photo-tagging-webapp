function Notification(props) {
  return (
    <div
      className="position-fixed start-50 translate-middle-x"
      style={{ top: "15%", maxWidth: "300px" }}
    >
      <div
        className={`notification align-items-center text-white border-0 ${
          props.correct ? "bg-success" : "bg-danger"
        }`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        hidden={props.showToast ? false : true}
      >
        <div className="d-flex">
          <div
            className="text-center flex-grow-1"
            style={{ padding: ".75rem" }}
          >
            {props.correct
              ? "Gotcha! You found a Pokemon."
              : "Wrong! Keep Looking."}
          </div>

          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            aria-label="Close"
            onClick={props.hideToast}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Notification;
