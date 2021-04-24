import { useState } from 'react'
import { useHistory } from 'react-router-dom'

 
const CreateJournal = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = "omni"
        const date = "2/7/2021"
        const entry = {title, content, date, user}

        // fetch('http://localhost:8000/journal/', {
        //     method : 'POST',
        //     headers : {"Content-Type" : "application/json"},
        //     body : JSON.stringify(entry)
        // }).then(() => {
        //     console.log("Added new entry to journal...")
        //     history.push('/journal')
        // })

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