import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'
import React from 'react'


const HabitList = ({habits, setData}) => {

    const history = useHistory()
    
    const handleClick = (id) => {
        let oldHabits = [...habits];
        let habit = oldHabits.filter(habit => habit._id === id)[0];
        habit.streak += 1;
        let habitIndex = oldHabits.indexOf(habit);
        oldHabits[habitIndex] = habit; 
        setData(oldHabits);
        Axios({
            method:"POST",
            data:{
                id: habit._id,
                streak : habit.streak
            },
            url:"http://localhost:4000/update-habit",
            withCredentials:true
        }).then((res) => {console.log(res)})
        
    }
    const handleReset = (id) => {
        let oldHabits = [...habits];
        let habit = oldHabits.filter(habit => habit._id === id)[0];
        habit.streak = 0;
        console.log(habit)
        let habitIndex = oldHabits.indexOf(habit);
        oldHabits[habitIndex] = habit; 
        setData(oldHabits);
        Axios({
            method:"POST",
            data:{
                id: habit._id,
                streak : habit.streak
            },
            url:"http://localhost:4000/update-habit",
            withCredentials:true
        }).then((res) => {console.log(res)})
    }
    const handleDelete = (id) => {
        let oldHabits = [...habits];
        let habit = oldHabits.filter(habit => habit._id === id)[0];
        let habitIndex = oldHabits.indexOf(habit);
        oldHabits.splice(habitIndex, 1)
        setData(oldHabits)
        Axios({
            method:"DELETE",
            url:`http://localhost:4000/delete-habit/${id}`,
            withCredentials:true
        }).then(() => {
            console.log("here")
            history.push('/habits')
        })
    }
    return ( 
        <div>
           
            <React.Fragment>
            <Link to='/create'><button className="btn">Add new Habit</button></Link>
            {habits && habits.map(habit => (
                <div className="card">
                    <div className="container">
                        {/* <button className="add">options</button> */}
                        <p key={habit._id}>{habit.content} -- {habit.streak} Day Streak!</p><br/>
                        <button onClick = {() => {handleClick(habit._id)}} className="add">+1</button>
                        <button onClick = {() => {handleReset(habit._id)}} className="reset">Reset</button>
                        <div className="dropdown">
                            <button className="options">More</button>
                            <div className="dropdown-content">
                                <Link onClick={() => {handleDelete(habit._id)}} className="a">Delete</Link>
                                <Link to={`/edit-habit/${habit._id}`} className="a">Edit</Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            ))}
            </React.Fragment>
        </div>
     );
}
 
export default HabitList;