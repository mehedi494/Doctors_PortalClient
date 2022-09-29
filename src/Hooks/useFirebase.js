
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseConfig from './../Pages/Login/Firebase/Firebase.config';

initializeApp(firebaseConfig);

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setError] = useState(' ');
    const [isAdmin, setIsAdmin] = useState(false)
    const [token, setGetToken] = useState('')
    const Googleprovider = new GoogleAuthProvider();

    // console.log(user)      


    //    GOOGLE LOGIN STATE.........................
    const GoogleLogin = (location, navigate) => {
        signInWithPopup(auth, Googleprovider)
            .then((result) => {
                console.log(result);
                setUser(result.user)
                userSetDb(result.user.email, result.user.displayName, 'PUT')
                location.state ? navigate(location?.state?.from) : navigate("/")
            })
            .catch((error) => {

                setError(error.message)


                // ...
            });

    }


    //  login.js     ( LOGIN STATE) ..............................
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                location.state ? navigate(location?.state?.from) : navigate("/")
            })

            .catch((error) => {
                // console.log(error.code =='auth/user-not-found');
                // console.log(error);
                console.log(error.code);
                setError(error)

            }).finally(() => setIsLoading(false))
    }

    //  Register.js      (REGISTER HANDLDER)  ..............
    const Register = (name, email, password, navigate) => {
        setIsLoading(true)

        createUserWithEmailAndPassword(auth, email, password, name)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: " "
                }).then(() => {
                    const newUser = { email, displayName: name }
                    setUser(newUser)
                    userSetDb(email, name, 'POST')

                })


                setError(undefined)
                navigate("/")
            }).catch(error => {
                // console.log(error.code);
                setError(error.message);
            }).finally(() => setIsLoading(false))
    }

    const userSetDb = (email, displayName, method) => {
        const user = { email: email, displayName: displayName }
        fetch('https://doctorsportal-serverside.onrender.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

    }

    // OnAuthState change ..................................
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

                setGetToken(user.accessToken)

                // console.log('default access token ', user.accessToken);

            } else {
                setUser({})

            }
            setIsLoading(false)
        });
        return () => unSubscribe;
    }, [auth])

    // UNSUBSCRIBE....................
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then((user) => {
            console.log(user)
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false))
    }



    useEffect(() => {
        fetch(`https://doctors-portal-server-2rol-ozuh11rwe-mehedi494.vercel.app/checkuser/admin/${user.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.isAdmin)
                setIsAdmin(data.isAdmin)
            })
    }, [user.email])

    return {
        Register, user, setUser, logOut, loginUser, isLoading, errorMsg, setError, GoogleLogin, isAdmin, token, setIsLoading
    }
}
export default useFirebase;