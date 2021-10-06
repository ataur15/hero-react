import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";
import initializeAuthentication from './Firebase/firebase.initialize';
import { useState } from 'react';

initializeAuthentication();

/*
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAqouNVfqup4JhHfQDhfCrPH8gnlBl_xGE",
  authDomain: "fir-auth-b8b9f.firebaseapp.com",
  projectId: "fir-auth-b8b9f",
  storageBucket: "fir-auth-b8b9f.appspot.com",
  messagingSenderId: "743691426164",
  appId: "1:743691426164:web:e5ff8b3368f00623f03421"
};

const app = initializeApp(firebaseConfig);
*/

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function App() {
  const [user, setUser] = useState({});
  const auth = getAuth();

  // Google SignIn
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const loggedUser = {
          name: displayName,
          email: email,
          photo: photoURL
        };

        setUser(loggedUser);

      }).catch((error) => {
        // ekta state a error ta rekhe ui te dekhaite paro
        console.log(error.message);
      });;
  }

  // Github SignIn
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // console.log(result.user);
        const { displayName, email, photoURL } = result.user;
        const loggedUser = {
          name: displayName,
          email: email,
          photo: photoURL
        };

        setUser(loggedUser);

      }).catch((error) => {
        // ekta state a error ta rekhe ui te dekhaite paro
        console.log(error.message);
      });
  }

  // Sign Out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      });
  }

  return (
    <div className="App">
      {
        !user.email ?
          <div>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            <button onClick={handleGithubSignIn}>Github Sign In</button>
          </div>
          :
          <button onClick={handleSignOut}>Sign Out</button>
      }
      <br />
      {
        user.email &&
        <div>
          <p><img src={user.photo} alt="" /></p>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      }
    </div>
  );
}

export default App;
