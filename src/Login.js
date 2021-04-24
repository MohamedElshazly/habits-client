import React, {useState} from 'react'
import Axios from 'axios'

export default function Login() {

    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const login = async () => {
        Axios({
            method:"POST",
            data : {
                username: loginUsername,
                password: loginPassword
            },
            withCredentials: true,
            url: "http://localhost:4000/auth/login"
        }).then((res) => {console.log(res)})
    }

    return (
        <div>
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
        
    </div>
    )
}
