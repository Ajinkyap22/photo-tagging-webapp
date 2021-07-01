import "bootstrap/js/src/collapse.js";
import Timer from "./timer";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <h2 className="navbar-brand">Where's That Pokemon?</h2>

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
            <li
              className="nav-item px-2 py-2 py-md-0"
              hidden={props.user ? false : true}
            >
              <button className="btn btn-secondary" onClick={props.signOut}>
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
