import React from 'react'
import { useHistory } from "react-router-dom";
import Axios from 'axios'

export default function Logout() {
    const history = useHistory()
    Axios({
        method:"GET", 
        withCredentials:true,
        url:"http://localhost:4000/auth/logout"
    }).then(() =>{
        history.push('/login')
    })
    return (
        <div>
            
        </div>
    )
}
