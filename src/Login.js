import React, {useState} from 'react'
import Axios from 'axios'
import { useHistory, Link } from "react-router-dom";
import  useIsLoggedIn  from './useIsLoggedIn'

export default function Login() {

    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const {loggedInStatus} = useIsLoggedIn('http://localhost:4000/auth/is-logged-in');

    const history = useHistory()
   
    const login = async (e) => {
        e.preventDefault()
        Axios({
            method:"POST",
            data : {
                username: loginUsername,
                password: loginPassword
            },
            withCredentials: true,
            url: "http://localhost:4000/auth/login"
        }).then((res) => {
            console.log(res)
            history.push('/')
            window.location.reload(false)
        })
    }

    return (
        <div className="auth">
            {loggedInStatus ? (
                <h1>You're already logged in...</h1>
            ):
            (
            <React.Fragment>
                <h1>Login</h1>
                <div className="form-container">
                        <form onSubmit={login}>
                            
                            <input
                            type="text"
                            placeholder="username"
                            onChange={(e) => setLoginUsername(e.target.value)}
                            />
                            <input
                            placeholder="password"
                            type="password"
                            onChange={(e) => setLoginPassword(e.target.value)}
                            />
                            <div className="buttons-container">
                                <button className="loginBtn" >Login</button>
                                <Link to="/register" className="reg"><p>Need an Account?</p></Link>
                            </div>     
                    </form>
                </div>
                
            </React.Fragment>
            )}
        
        
    </div>
    )
}
