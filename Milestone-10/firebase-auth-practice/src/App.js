import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";
import initAuthentication from './Firebase/firebase.initialize';
import { useState } from 'react';

initAuthentication();

function App() {
  const [user, setUser] = useState({});
  const { displayName, email, photoURL } = user;

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // Google Sign In
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
      }).catch((error) => {
        console.log(error.message);
      });
  }

  // Github Sign In
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        setUser(result.user);
      }).catch((error) => {
        console.log(error.message);
      });
  }

  // Sign Out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
  }

  return (
    <div className="App">
      {
        !email ?
          <div>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            <button onClick={handleGithubSignIn}>Github Sign In</button>
          </div>
          :
          <button onClick={handleSignOut}>Sign Out</button>
      }
      <br />
      {
        email && <div>
          <p><img src={photoURL} alt="" /></p>
          <h2>{displayName}</h2>
          <p>{email}</p>
        </div>
      }
    </div>
  );
}

export default App;
