import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreateHabit = () => {

    const [content, setHabit] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const streak = 0
        const user= 'omni'
        const habit = {content, streak, user} 

        fetch(`http://localhost:8000/habits/`, {
            method : 'POST', 
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(habit)
        }).then(() => {
            console.log("Post request done")
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