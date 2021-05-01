import { useParams, useHistory } from 'react-router-dom'
import React, {useState, useEffect } from 'react'
import Axios from 'axios'
import  useIsLoggedIn  from './useIsLoggedIn'

export default function EditHabit() {
    const { id } = useParams()
    const history = useHistory()
    const [habit, setHabit] = useState('')
    const {loggedInStatus} = useIsLoggedIn('https://new-habits.herokuapp.com/auth/is-logged-in');


    useEffect(() => {
        Axios({
            method:"GET",
            url:`https://new-habits.herokuapp.com/get-habit/${id}`,
            withCredentials:true
        }).then((res) => {
            setHabit(res.data.content)
        })
    }, [id])

    const handleSubmit = (e) =>{
        e.preventDefault()
        Axios({
            method:"POST",
            url:"https://new-habits.herokuapp.com/edit-habit",
            data:{
                id: id,
                habit : habit
            },
            withCredentials:true
        }).then((res) => {
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
                <legend>Edit Habit!</legend>
                <form onSubmit={handleSubmit} method="post">
                    <label>Habit : </label>
                    <input 
                        type="text"
                        required
                        value = {habit}
                        onChange={(e) => setHabit(e.target.value)}
                    />
                    <br/>
                    <button className="btn">Edit Habit!</button>
                </form>
            </React.Fragment>
            )}
        </div>
    )
}
