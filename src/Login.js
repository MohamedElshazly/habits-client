import React, {useState,useEffect} from 'react'
import Axios from 'axios'
import { useHistory } from "react-router-dom";

export default function Login() {

    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [loggedInStatus, setLoggedInStatus] = useState(0)
    const history = useHistory()
    useEffect(() => {
        Axios({
            method:"GET",
            url:"http://localhost:4000/auth/is-logged-in",
            withCredentials:true,
        }).then((res) => {
            console.log(loggedInStatus)
            if(res.data === true){
                setLoggedInStatus(1)
            }else{
                setLoggedInStatus(0)
            }
        })
    },[loggedInStatus])

    const login = async () => {
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
        <div>
            {loggedInStatus ? (
                <h1>You're already logged in...</h1>
            ):
            (
            <React.Fragment>
                <h1>Login</h1>
                <input
                placeholder="username"
                onChange={(e) => setLoginUsername(e.target.value)}
                />
                <input
                placeholder="password"
                type="password"
                onChange={(e) => setLoginPassword(e.target.value)}
                />
                <button onClick={login}>Submit</button> 
            </React.Fragment>
            )}
        
        
    </div>
    )
}
