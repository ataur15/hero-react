import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('Inside state change', user);
                setUser(user);
            }
        });
    }, []);

    const logout = () => {
        signOut(auth)
            .then(result => {
                setUser({})
            })
    }

    return {
        user,
        error,
        logout,
        signInWithGoogle
    };
}

export default useFirebase;