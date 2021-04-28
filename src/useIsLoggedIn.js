import { useState, useEffect } from 'react'
import Axios from 'axios'

const useIsLoggedIn = (url) => {
    const [loggedInStatus, setLoggedInStatus] = useState(0)
    
    useEffect(() => {
        Axios({
            method:"GET",
            url:url,
            withCredentials:true,
        }).then((res) => {
            console.log(loggedInStatus)
            if(res.data === true){
                setLoggedInStatus(1)
            }else{
                setLoggedInStatus(0)
            }
        })
    })

    return {loggedInStatus, setLoggedInStatus}
        
}

export default useIsLoggedIn;
