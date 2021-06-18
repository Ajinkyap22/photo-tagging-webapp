function Modal(props) {
  return (
    <div className={props.show ? "modal show" : "modal"}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Characters</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Character 1</li>
              <li className="list-group-item">Character 2</li>
              <li className="list-group-item">Character 3</li>
            </ul>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
