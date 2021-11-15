import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from "../Pages/Login/Firebase/firebase.init";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // User Registration
    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // const user = result.user;
                setAuthError('');

                // Send name to the firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {
                    setAuthError(error.message);
                });

                // Save user to database
                saveUser(email, name, 'POST');

                navigate('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    // User Login
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // const user = result.user;
                setAuthError('');

                const destination = location?.state?.from.pathname || '/';
                navigate(destination);

            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    // Google SignIn
    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setAuthError('');

                // Save user to database
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');

                const destination = location?.state?.from.pathname || '/';
                navigate(destination);

            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    // Observe user auth state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, []);

    // logout
    const logout = () => {
        signOut(auth)
            .then(() => {

            }).catch((error) => {

            });

    }

    // Save user to database
    const saveUser = (email, name, method) => {
        const user = { email, name };
        fetch(`http://localhost:5000/users`, {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })
    }

    return {
        user,
        isLoading,
        authError,
        loginUser,
        registerUser,
        logout,
        signInWithGoogle
    }
}

export default useFirebase;