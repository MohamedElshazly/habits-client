import { useParams, useHistory } from 'react-router-dom'
import React, { useState, useEffect } from 'react' 
import Axios from 'axios'
import  useIsLoggedIn  from './useIsLoggedIn'

export default function UpdateJournal() {
    const { id } = useParams()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const {loggedInStatus} = useIsLoggedIn('https://new-habits.herokuapp.com/auth/is-logged-in')

    // const [entry, setEntry] = useState('')

    useEffect(() => {
        Axios({
        method:"GET", 
        url:`https://new-habits.herokuapp.com/journal-entry/${id}`,
        withCredentials:true
    }).then((res) => {
        setTitle(res.data.title)
        setContent(res.data.content)
        console.log(res.data)
    })
}, [id])

const handleSubmit = (e) => {
    e.preventDefault()
    Axios({
        method:"POST",
        url: "https://new-habits.herokuapp.com/edit-journal-entry",
        withCredentials:true,
        data : {
            id: id,
            title : title,
            content : content
        }
    }).then((res) => {
        console.log(res)
        history.push('/journal')
    })
}

    return (
        <div>
            {loggedInStatus===0 ? (
                <h1>You need to log in first...</h1>
            ):
            (
            <React.Fragment>
            <form onSubmit={handleSubmit} method='POST'>
                <label>Title: </label>
                <br/>
                <input 
                    type="text"
                    required
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}/>
                <br/>
                <br/>
                <label>Content: </label>
                <br/>
                <br/>
                <textarea 
                    required
                    value = {content}
                    onChange = {(e) => setContent(e.target.value)}
                ></textarea>
                <div className="journal">
                <button className="btn">Edit Journal Entry</button> 
                </div>
            </form>
            </React.Fragment>
            )}
        </div>
    )
}
