import snubbull from "../images/Level-1/snubbull.png";
import heatmor from "../images/Level-1/heatmor.png";
import shroomish from "../images/Level-1/shroomish.png";

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
              <li className="list-group-item ">
                <div className="row">
                  <div className="col">
                    <img src={snubbull} alt="" className="img-fluid w-50" />
                  </div>
                  <div className="col g-4">
                    <div>Pokemon 1</div>
                    <div>Easy</div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col">
                    <img src={heatmor} alt="" className="img-fluid w-50 py-2" />
                  </div>
                  <div className="col g-4">
                    <div>Pokemon 2</div>
                    <div>Medium</div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col">
                    <img src={shroomish} alt="" className="img-fluid w-50" />
                  </div>
                  <div className="col g-4">
                    <div>Pokemon 3</div>
                    <div>Hard</div>
                  </div>
                </div>
              </li>
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
