import React from 'react'
import { Link, useHistory } from "react-router-dom";
import Axios from 'axios'

export default function Logout() {
    // const history = useHistory()
    Axios({
        method:"GET", 
        withCredentials:true,
        url:"https://new-habits.herokuapp.com/auth/logout"
    }).then(() =>{
        window.location.reload(false);
        // history.push('/login')
    })
    return (
        <div>
            <h1>Goodbye! wait maybe you want to <Link to="/login">come back ?</Link></h1>
        </div>
        
    )
}
