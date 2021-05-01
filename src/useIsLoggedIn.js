import { useState, useEffect } from 'react'
import Axios from 'axios'

const useIsLoggedIn = (url) => {
    const [loggedInStatus, setLoggedInStatus] = useState(true)
    
    useEffect(() => {
        Axios({
            method:"GET",
            url:url,
            withCredentials:true,
        }).then((res) => {
            console.log(loggedInStatus)
            if(res.data === true){
                setLoggedInStatus(true)
            }else{
                setLoggedInStatus(false)
            }
        })
    })

    return {loggedInStatus, setLoggedInStatus}
        
}

export default useIsLoggedIn;
