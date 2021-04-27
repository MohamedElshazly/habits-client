import { useParams, useHistory } from 'react-router-dom'
import {useState, useEffect } from 'react'
import Axios from 'axios'

export default function EditHabit() {
    const { id } = useParams()
    const history = useHistory()
    const [habit, setHabit] = useState('')

    useEffect(() => {
        Axios({
            method:"GET",
            url:`http://localhost:4000/get-habit/${id}`,
            withCredentials:true
        }).then((res) => {
            setHabit(res.data.content)
        })
    }, [id])

    const handleSubmit = (e) =>{
        e.preventDefault()
        Axios({
            method:"POST",
            url:"http://localhost:4000/edit-habit",
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
        </div>
    )
}
