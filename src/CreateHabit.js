import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import  useIsLoggedIn  from './useIsLoggedIn'


const CreateHabit = () => {

    const [content, setHabit] = useState('')
    const {loggedInStatus} = useIsLoggedIn('https://new-habits.herokuapp.com/auth/is-logged-in')
    const history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault()
        // const habit = {content} 

        Axios({
            method: "POST",
            data : {
                habit : content
            },
            url: "https://new-habits.herokuapp.com/create-habit",
            withCredentials:true
        }).then((res) => {
            console.log(res)
            history.push('/habits')
        })

    }

    return (  
        <div className="create">
            {loggedInStatus===0 ? (
                <h1>You need to log in first...</h1>
            ):
            (
            <React.Fragment>
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
            </React.Fragment>
            )}
        </div>
        
    );
}
 
export default CreateHabit;