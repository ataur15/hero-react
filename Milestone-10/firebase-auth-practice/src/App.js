import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import initAuthentication from './Firebase/firebase.initialize';
import { useState } from 'react';

initAuthentication();

function App() {
  const [user, setUser] = useState({});
  const { displayName, email, photoURL } = user;
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/(?=.*[!@#$&*])/.test(password)) {
      setError('Password must contain one special letter.');
      return;
    }

    isLogin ? loginUser(userEmail, password) : registerUser(userEmail, password);
  }

  // Login
  const loginUser = () => {
    signInWithEmailAndPassword(auth, userEmail, password)
      .then((result) => {
        console.log(result.user);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  // Register new user
  const registerUser = (userEmail, password) => {
    createUserWithEmailAndPassword(auth, userEmail, password)
      .then(result => {
        setUserName(name);
        console.log(result.user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
  }

  // Set user name
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      setError('');
    }).catch((error) => {
      setError(error.message);
    });
  }

  // Reset Password
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {

      })
      .catch((error) => {
        setError(error.message);
      });
  }

  // Name Field
  const handleName = (e) => {
    setName(e.target.value);
  }

  // Email Field
  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  }

  // Password Field
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  // Checkbox
  const handleCheckbox = (e) => {
    setIsLogin(e.target.checked);
  }

  // Google Sign In
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
      }).catch((error) => {
        setError(error.message);
      });
  }

  // Github Sign In
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        setUser(result.user);
      }).catch((error) => {
        setError(error.message);
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
    <div>
      <div className="w-full max-w-sm m-auto pt-12">
        <h3 className="text-center py-4 text-2xl font-medium text-blue-600">
          {isLogin ? 'Login' : 'Register'}
        </h3>
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {
            error &&
            <p className="text-red-500 italic mb-3">{error}</p>
          }

          {isLogin ||
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" htmlFor="Name">Name</label>
              <input onBlur={handleName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring" id="name" type="text" required />
            </div>
          }
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="Email">Email</label>
            <input onBlur={handleEmail} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring" id="email" type="email" required />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="password">Password</label>
            <input onBlur={handlePassword} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring" id="password" type="password" required />
          </div>
          <div className="mb-6">
            <input onChange={handleCheckbox} type="checkbox" name="" id="" />
            <label className="text-gray-600" htmlFor="Already Registered"> Already Registered?</label>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              {isLogin ? 'Login' : 'Register'}
            </button>
            {isLogin &&
              <button onClick={handleResetPassword} className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800">
                Forgot Password?
              </button>
            }
          </div>
        </form>
      </div>

      <div className="w-full max-w-sm m-auto py-6 text-center">
        {
          !email ?
            <div>
              <button onClick={handleGoogleSignIn} className="border border-gray-300 py-1 px-2 mr-2">Google Sign In</button>
              <button onClick={handleGithubSignIn} className="border border-gray-300 py-1 px-2 mr-2">Github Sign In</button>
            </div>
            :
            <button onClick={handleSignOut} className="border border-gray-300 py-1 px-2 mr-2">Sign Out</button>
        }
        {
          email && <div className="text-center mt-3">
            <p><img className="m-auto" src={photoURL} alt="" /></p>
            <h2>{displayName}</h2>
            <p>{email}</p>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
