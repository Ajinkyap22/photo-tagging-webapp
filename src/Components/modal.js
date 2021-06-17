function Modal(props) {
  return (
    <div className="charModal" hidden={props.show ? false : true}>
      <button className="close-modal" onClick={props.closeModal}>
        X
      </button>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Char 1</li>
        <li className="list-group-item">Char 1</li>
        <li className="list-group-item">Char 1</li>
      </ul>
    </div>
  );
}

export default Modal;
