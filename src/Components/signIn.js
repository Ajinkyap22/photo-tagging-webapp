import { firebase, auth } from "../firebase/config";

function SignIn(props) {
  function signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div>
      <button
        style={{ backgroundColor: "#db4a39" }}
        className="btn text-light"
        onClick={signIn}
      >
        <i className="bi bi-google"></i>
        &nbsp;Sign in With Google
      </button>
    </div>
  );
}

export default SignIn;
