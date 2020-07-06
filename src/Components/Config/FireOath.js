import React,{useState} from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Config';


const FireOath = () => {   
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [url,setUrl] = useState('');
 

  const handleSubmit=()=> {
        firebase.initializeApp(firebaseConfig);
        var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
//   var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;  
  setName(user.displayName)
  setEmail(user.email)
  setUrl(user.photoURL)
  
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
  }
   
    return (
        <div>
           <h1>Welcome to the Login page</h1>
             <p style={{textTransform:'uppercase'}}>Name: {name}</p>
             <p>Email: {email}</p> 
             <img src={url} alt="" style={{width:'200px',height:'200px'}}/>  
           <button onClick={handleSubmit}>Login with Google</button> 
        </div>
    );
};

export default FireOath;