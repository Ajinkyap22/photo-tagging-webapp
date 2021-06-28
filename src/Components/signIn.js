import { firebase, auth } from "../firebase/config";

function SignIn(props) {
  function signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={signIn}>
        Sign in With Google
      </button>
    </div>
  );
}

export default SignIn;
