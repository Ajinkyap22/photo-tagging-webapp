import { firebase, auth } from "../firebase/config";

function Authorize(props) {
  function signIn() {
    const provider = firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  function signOut() {
    if (!auth.currentUser) return;

    auth.signOut();
  }

  return (
    <button className="btn-primary" onClick={props.signedIn ? signOut : signIn}>
      {props.signedIn ? "Sign Out" : "Sign In"}
    </button>
  );
}

export default Authorize;
