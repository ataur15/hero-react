import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../firebase/firebase.init";
import { useDispatch } from 'react-redux';
import { login } from "../redux/auth/loginActions";

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const dispatch = useDispatch();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // User Registration
    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setAuthError('');
                // const user = result.user;
                // Update name to the firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                });

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
                // setUser(user);
                dispatch(login(user));
            } else {
                // setUser({});
                dispatch(login(null));
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

    return {
        user,
        isLoading,
        authError,
        loginUser,
        setIsLoading,
        registerUser,
        logout,
        signInWithGoogle
    }
}

export default useFirebase;