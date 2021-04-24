import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'

const CreateHabit = () => {

    const [content, setHabit] = useState('')
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        // const habit = {content} 

        Axios({
            method: "POST",
            data : {
                habit : content
            },
            url: "http://localhost:4000/create-habit",
            withCredentials:true
        }).then((res) => {
            console.log(res)
            history.push('/habits')
        })

    }

    return (  
        <div className="create">
            <legend>Add New Habit!</legend>
            <form onSubmit={handleSubmit} method="post">
                <label>Habit : </label>
                <input 
                    type="text"
                    required
                    value = {content}
                    onChange={(e) => setHabit(e.target.value)}
                />
                <br/>
                <button className="btn">Create Habit!</button>
            </form>
        </div>
        
    );
}
 
export default CreateHabit;