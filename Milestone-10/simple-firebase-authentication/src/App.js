import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, TwitterAuthProvider, signOut } from "firebase/auth";
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
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

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
      })
      .catch((error) => {
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
      })
      .catch((error) => {
        // ekta state a error ta rekhe ui te dekhaite paro
        console.log(error.message);
      });
  }

  // Facebook Sign In
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        console.log(result.user);
        const { displayName, email, photoURL } = result.user;
        const loggedUser = {
          name: displayName,
          email: email,
          photo: photoURL
        };
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  // Twitter Sign In
  const handleTwitterSignIn = () => {
    signInWithPopup(auth, twitterProvider)
      .then((result) => {
        console.log(result.user);
        const { displayName, email, photoURL } = result.user;
        const loggedUser = {
          name: displayName,
          email: email,
          photo: photoURL
        };
        setUser(loggedUser);
      })
      .catch((error) => {
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
    <div className="text-center mt-6">
      {
        !user.name ?
          <div>
            <button className="border border-gray-300 py-1 px-2 mr-2" onClick={handleGoogleSignIn}>Google Sign In</button>
            <button className="border border-gray-300 py-1 px-2 mr-2" onClick={handleGithubSignIn}>Github Sign In</button>
            <button className="border border-gray-300 py-1 px-2 mr-2" onClick={handleFacebookSignIn}>Facebook Sign In</button>
            <button className="border border-gray-300 py-1 px-2 mr-2" onClick={handleTwitterSignIn}>Twitter Sign In</button>
          </div>
          :
          <button className="border border-gray-300 py-1 px-2 mb-6" onClick={handleSignOut}>Sign Out</button>
      }
      <br />
      {
        user.name &&
        <div>
          <p className="mb-2"><img className="m-auto" src={user.photo} alt="" /></p>
          <p className="text-xl mb-2">{user.name}</p>
          <p>{user.email}</p>
        </div>
      }
    </div>
  );
}

export default App;
