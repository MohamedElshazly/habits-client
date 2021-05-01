import React from 'react'
import { useHistory } from "react-router-dom";
import Axios from 'axios'

export default function Logout() {
    const history = useHistory()
    Axios({
        method:"GET", 
        withCredentials:true,
        url:"https://new-habits.herokuapp.com/auth/logout"
    }).then(() =>{
        window.location.reload(false);
        history.push('/login')
    })
    return (
        <div>
            Reirecting...       
        </div>
    )
}
