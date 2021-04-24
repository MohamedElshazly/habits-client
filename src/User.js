import React, {useState} from 'react'
import Axios from 'axios'

export default function User() {
    const [User, setUser] = useState('')
    Axios({
        method:"GET", 
        withCredentials:true,
        url: "http://localhost:4000/auth/user"
    }).then((res) => {
        setUser(res.data)
        console.log(res.data)
    })
    return (
        <div>
            <h1>{User.username}</h1>
            
        </div>
    )
}
