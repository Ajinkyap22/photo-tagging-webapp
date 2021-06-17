function Nav(props) {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <h2 className="navbar-brand">Find The Character</h2>
        <h2 className="navbar-brand">00:00:00</h2>
        <button className="btn btn-light" onClick={props.displayModal}>
          Characters
        </button>
      </div>
    </nav>
  );
}

export default Nav;
