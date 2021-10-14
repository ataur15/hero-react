import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initAuthentication from "../firebase/firebase.init";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        /* .then((result) => {
            // console.log(result.user);
            setUser(result.user);
        }).catch((error) => {
            setError(error.message);
        }); */
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    return {
        user,
        error,
        logout,
        signInWithGoogle
    }
}

export default useFirebase;