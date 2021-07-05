// level 1
import snubbull from "../images/Level-1/snubbull.png";
import heatmor from "../images/Level-1/heatmor.png";
import shroomish from "../images/Level-1/shroomish.png";
// level 2
import bruxish from "../images/Level-2/bruxish.png";
import kricketot from "../images/Level-2/kricketot.png";
import combee from "../images/Level-2/combee.png";
// level 3
import charjabug from "../images/Level-3/charjabug.png";
import litwick from "../images/Level-3/litwick.png";
import sewaddle from "../images/Level-3/sewaddle.png";
// react imports
import { useEffect, useState } from "react";

function Modal(props) {
  // set pokemon with images & names for each level
  const [pokemon, setPokemon] = useState({
    easy: ["Snubbull", snubbull],
    medium: ["Heatmor", heatmor],
    hard: ["Shroomish", shroomish],
  });

  // to change pokemon for each level
  useEffect(() => {
    if (props.level === 1) {
      const set = {
        easy: ["Snubbull", snubbull],
        medium: ["Heatmor", heatmor],
        hard: ["Shroomish", shroomish],
      };

      setPokemon(set);
    }

    if (props.level === 2) {
      const set = {
        easy: ["Bruxish", bruxish],
        medium: ["Kricketot", kricketot],
        hard: ["Combee", combee],
      };

      setPokemon(set);
    }

    if (props.level === 3) {
      const set = {
        easy: ["Charjabug", charjabug],
        medium: ["Litwick", litwick],
        hard: ["Sewaddle", sewaddle],
      };

      setPokemon(set);
    }
  }, [props.level]);

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
                    <img
                      src={pokemon.easy[1]}
                      alt=""
                      className="img-fluid w-50"
                    />
                  </div>

                  <div className="col g-4">
                    <div className="lead">{pokemon.easy[0]}</div>
                    <div className="text-success fw-bold">Easy</div>
                  </div>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row">
                  <div className="col py-2">
                    <img
                      src={pokemon.medium[1]}
                      alt=""
                      className="img-fluid w-50"
                    />
                  </div>

                  <div className="col g-4">
                    <div className="lead">{pokemon.medium[0]}</div>
                    <div className="text-warning fw-bold">Medium</div>
                  </div>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row">
                  <div className="col">
                    <img
                      src={pokemon.hard[1]}
                      alt=""
                      className="img-fluid w-50"
                    />
                  </div>

                  <div className="col g-4">
                    <div className="lead">{pokemon.hard[0]}</div>
                    <div className="text-danger fw-bold">Hard</div>
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
