import React, {createContext, useState, useEffect} from 'react';
import { auth } from "../firebase";

const userContext = createContext({user: null})

const UserProvider = () => {
    const [state,setState] = useState(null);
    useEffect({
        auth.onAuthStateChanged(userAuth=> setState(userAuth))
    })
    return (
        <div>
            
        </div>
    );
};

export default UserProvider;