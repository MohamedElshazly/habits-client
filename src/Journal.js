import JournalList from './JournalList'
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import  useIsLoggedIn  from './useIsLoggedIn'

const Journal = () => {

    const [entries, setentries] = useState('')
    const {loggedInStatus} = useIsLoggedIn('http://localhost:4000/auth/is-logged-in')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        Axios({
            method:"GET",
            url: "http://localhost:4000/list-journal-entries",
            withCredentials:true
        }).then((res) => {
            setentries(res.data)
            setIsLoading(false)
            // console.log(res.data)
        })

    }, [])

    return (
        <div>
             {loggedInStatus ? (
                <React.Fragment>
                    {isLoading && <div>Loading...</div>}
                    {entries && <JournalList entries={entries} />}
                    </React.Fragment>
                    ):(
                        <h1>You need to be logged in...</h1>
                        
                    )}
        </div>
    )
}

export default Journal; 