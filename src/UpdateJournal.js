import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react' 
import Axios from 'axios'

export default function UpdateJournal() {
    const { id } = useParams()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    // const [entry, setEntry] = useState('')

    useEffect(() => {
        Axios({
        method:"GET", 
        url:`http://localhost:4000/journal-entry/${id}`,
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
        url: "http://localhost:4000/edit-journal-entry",
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
            
        </div>
    )
}
