import "bootstrap/js/src/collapse.js";
import Timer from "./timer";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark py-3">
      <div className="container">
        <h2 className="navbar-brand">Where's That Pokemon?</h2>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item px-3 pt-1">
              <Timer start={props.start}></Timer>
            </li>
            <li class="nav-item px-1">
              <button className="btn btn-light" onClick={props.displayModal}>
                Pokemon
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
