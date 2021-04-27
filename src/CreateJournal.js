import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
 
const CreateJournal = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const entry = {title, content}

        Axios({
            method: "POST",
            data : {
                entry : entry
            },
            url: "http://localhost:4000/create-journal-entry",
            withCredentials:true
        }).then((res) => {
            console.log(res)
            history.push('/journal')
        })

    }

    return ( 
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
               <button className="btn">Add Journal Entry</button> 
            </div>
            
        </form>
     );
}
 
export default CreateJournal;