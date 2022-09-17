import {  createContext } from "react";
import useFirebase from './useFirebase';

export const AuthContext = createContext(null);

const AuthPorvider = ({ children }) => {
    const allContex = useFirebase()
    return (
        <AuthContext.Provider value={allContex}>
            {children}

        </AuthContext.Provider>
    )
}
export default AuthPorvider;