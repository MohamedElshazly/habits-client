import { useParams, useHistory, Link } from 'react-router-dom'
import React, {useState, useEffect } from 'react'
import Axios from 'axios'
import  useIsLoggedIn  from './useIsLoggedIn'
// import useFetch from './useFetch'

const JournalDetails = () => {
    const { id } = useParams()
    console.log(id)
    const history = useHistory()
    const [entry, setEntry] = useState('')
    const {loggedInStatus} = useIsLoggedIn('https://new-habits.herokuapp.com/auth/is-logged-in')


    useEffect(() => {
        Axios({
        method:"GET", 
        url:`https://new-habits.herokuapp.com/journal-entry/${id}`,
        withCredentials:true
    }).then((res) => {
        setEntry(res.data)
        console.log(res.data)
    })
}, [id])
    

    const handleClick = () => {
        Axios({
            method:"DELETE",
            url:`https://new-habits.herokuapp.com/delete-journal-entry/${id}`,
            withCredentials:true
        }).then(() => {
            history.push('/journal')
        })
        
    }

    return ( 
        <div className="journalContainer">
            {loggedInStatus===0 ? (
                <h1>You need to log in first...</h1>
            ):
            (
            <React.Fragment>
            {entry && ( <div>
            <h1>{entry.title}</h1>
            <p className="details">{entry.content}</p>
            <Link to={`/update-entry/${id}`}><button className="btn">Edit</button></Link>
            <button className="dangerBtn" onClick={handleClick}>Delete</button>
            </div> )}
            </React.Fragment>
            )}
        </div>
        
     );
}
 
export default JournalDetails;