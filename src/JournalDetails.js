import { useParams, useHistory, Link } from 'react-router-dom'
import {useState, useEffect } from 'react'
import Axios from 'axios'
// import useFetch from './useFetch'

const JournalDetails = () => {
    const { id } = useParams()
    console.log(id)
    const history = useHistory()
    const [entry, setEntry] = useState('')

    useEffect(() => {
        Axios({
        method:"GET", 
        url:`http://localhost:4000/journal-entry/${id}`,
        withCredentials:true
    }).then((res) => {
        setEntry(res.data)
        console.log(res.data)
    })
}, [id])
    

    const handleClick = () => {
        Axios({
            method:"DELETE",
            url:`http://localhost:4000/delete-journal-entry/${id}`,
            withCredentials:true
        }).then(() => {
            history.push('/journal')
        })
        
    }

    return ( 
        <div className="journalContainer">
            {entry && ( <div>
            <h1>{entry.title}</h1>
            <p className="details">{entry.content}</p>
            <Link to={`/update-entry/${id}`}><button className="btn">Edit</button></Link>
            <button className="dangerBtn" onClick={handleClick}>Delete</button>
            </div> )}
        </div>
        
     );
}
 
export default JournalDetails;