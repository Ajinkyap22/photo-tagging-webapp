function Modal(props) {
  return (
    <div className={props.show ? "modal show" : "modal"} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Pokemon To Find</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={props.closeModal}
            ></button>
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
              onClick={props.closeModal}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
