import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, []);

    const logout = () => {
        signOut(auth)
            .then(() => {

            })
            .catch((error) => {
                setError(error.message);
            });
    }

    return {
        user,
        logout,
        signInWithGoogle,
    }

}

export default useFirebase;