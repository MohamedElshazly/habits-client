import React, {useState} from 'react' 
import Axios from 'axios'
import { useHistory, Link } from "react-router-dom";

export default function Register() {
    const [registerUsername, setRegisterUsername] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const history = useHistory()
    const register = async (e) => {
      e.preventDefault()
      Axios({
        method: "POST",
        data: {
          username: registerUsername,
          password: registerPassword,
        },
        withCredentials: true,
        url: "https://new-habits.herokuapp.com/auth/register",
      }).then((res) => {
        console.log(res)
        history.push('/login')
      })
        
    }
    return (
        <div className="auth">
            <h1>Register</h1>
                <div className="form-container">
                        <form onSubmit={register}>          
                            <input
                            type="text"
                            placeholder="username"
                            onChange={(e) => setRegisterUsername(e.target.value)}
                            />
                            <input
                            placeholder="password"
                            type="password"
                            onChange={(e) => setRegisterPassword(e.target.value)}
                            />
                            <div className="buttons-container">
                                <button className="loginBtn">Register</button>
                                <Link to="/login" className="reg"><p>Already have an account?</p></Link>
                            </div>     
                    </form>
                </div>
        </div>
    )
}
