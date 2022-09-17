
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseConfig from './../Pages/Login/Firebase/Firebase.config';

initializeApp(firebaseConfig);

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setError] = useState(' ');



    

    const loginUser = (email, password) => {
        setIsLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
           
            .catch((error) => {
                // console.log(error.code =='auth/user-not-found');    
                console.log(error );
                setError(error?.message)



            }).finally(() => setIsLoading(false))
    }


    const Register = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential.user);
                setError(undefined)
                // ...
            }).catch(error => {
                console.log(error.code);
                setError(error.message);
            }).finally(() => setIsLoading(false))
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unSubscribe;
    }, [])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false))
    }
    return {
        Register, user, setUser, logOut, loginUser, isLoading, errorMsg, setError

    }
}
export default useFirebase;