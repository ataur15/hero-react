import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .finally(() => {
                setIsLoading(false);
            })
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('Inside state change', user);
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, []);

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(result => {
                setUser({})
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return {
        user,
        error,
        isLoading,
        logout,
        signInWithGoogle
    };
}

export default useFirebase;