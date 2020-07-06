import React, {useState} from 'react';

const SignUp = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [displayName,setDisplayName] = useState('');
    const [error,setError] = useState(null);

    const createUserWithEmailAndPasswordHandler =(e,email,password)=> {
            e.preventDefault();
            setEmail('');
            setPassword('');
            setDisplayName('');
    }


    const handleChange=(e)=> {
        const {name,value} = e.currentTarget;
        if(name==='userEmail') {
            setEmail(value)
        }
        else if(name=== 'userPassword') {
                setPassword(value)
        }
        else if( name=== 'displayName') {
            setDisplayName(value)
        }
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <div>
                {error && <div>{error}</div>}
                <form>
                    <label htmlFor="displayName">Display Name:</label>
                    <input 
                    type="text"
                    name="displayName"
                    value={displayName}
                    placeholder="E.g: Sojib"
                    onChange={handleChange}
                    /> <br/><br/>
                    <label htmlFor="userEmail">Email:</label>
                    <input 
                    type="email"
                    name="userEmail"
                    value={email}
                    placeholder="E.g faruq@gmail.com"
                    onChange={handleChange}
                    /> <br/><br/>
                    <label htmlFor="userPassword">Password:</label>
                    <input 
                    type="password"
                    name="userPassword"
                    value={password}
                    placeholder="Your password"
                    onChange={handleChange}
                    /> <br/><br/>
                    <button onClick={(e)=>{createUserWithEmailAndPasswordHandler(e,email,password)}}>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;