import React,{useState} from 'react';
import * as firebase from "firebase/app";
import firebaseConfig from '../../Components/Config/Config';
import "firebase/auth";

const Registration = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleEmail=(e)=> {
        e.preventDefault();
        setEmail(e.target.value)
    }
    const handlePassword=(e)=> {
        e.preventDefault();
        setPassword(e.target.value)
    }

    const handleSubmit=(e)=> {
        e.preventDefault();
        console.log(email,password)
        firebase.initializeApp(firebaseConfig);
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
});
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="email" onChange={handleEmail}/><br/>
                <input type="password" onChange={handlePassword}/><br/>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default Registration;