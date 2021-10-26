import "bootstrap/js/src/collapse.js";
import Timer from "./timer";
import Logo from "../images/pokeball.svg";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <h5>
            <img src={Logo} className="logo pb-1 mx-1" alt="log" /> Where's That
            Pokemon?
          </h5>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-2 py-1">
              <Timer
                start={props.start}
                show={props.show}
                win={props.win}
                time={props.time}
                setTime={props.setTime}
              ></Timer>
            </li>
            <li className="nav-item px-2 py-2 py-md-0">
              <button className="btn btn-light" onClick={props.displayModal}>
                Pokemon
              </button>
            </li>
            <li className="nav-item px-2 py-2 py-md-0">
              <button className="btn btn-secondary" onClick={props.endGame}>
                Back To Menu
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
