import React ,{ useState }from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler =(e,email,password)=>{
        console.log(email)
        console.log(password)
        e.preventDefault();
    }

    const handleChange=(e)=> {
            const {name,value} = e.currentTarget;
            if(name ==='userEmail') {
                setEmail(value)
            }
            else if(name==='userPassword') {
                setPassword(value)
            }
    }

    return (
        <div>
            <h1>Sign In</h1>
            <div className="userForm">
                {error!==null && <div>{error}</div>}
                <form>
                    <label htmlFor="userEmail">Email:</label>
                    <input 
                      type="email"
                      name="userEmail"
                      value={email}
                      placeholder="E.g: faruq123@gmail.com"
                      onChange={handleChange}
                      /> <br/>
                    <label htmlFor="userPassword">Password:</label>
                    <input 
                     type="password"
                     name="userPassword"
                     value={password}
                     placeholder="Your password"
                     onChange={handleChange}
                     /> <br/>
                     <button onClick={(e)=>{signInWithEmailAndPasswordHandler(e,email,password)}}>Sign In</button>
                </form>
                <p>or</p>
                <button>Sign In with Google</button>
                {/* <p className="text-center my-3">
          Don't have an account?{" "}
          <Link to="signUp" className="text-blue-500 hover:text-blue-600">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to = "passwordReset" className="text-blue-500 hover:text-blue-600">
            Forgot Password?
          </Link>
        </p> */}
            </div>
        </div>
    );
};

export default SignIn;