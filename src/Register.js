import React, {useState} from 'react' 
import Axios from 'axios'

export default function Register() {
    const [registerUsername, setRegisterUsername] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")

    const register = async () => {
      Axios({
        method: "POST",
        data: {
          username: registerUsername,
          password: registerPassword,
        },
        withCredentials: true,
        url: "http://localhost:4000/auth/register",
      }).then((res) => console.log(res));
        
    }
    return (
        <div>
            <h1>Register</h1>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
            
        </div>
    )
}
