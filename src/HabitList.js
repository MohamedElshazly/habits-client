import { Link } from 'react-router-dom'
import Axios from 'axios'

const HabitList = ({habits, setData}) => {
    
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
    return ( 
        <div>
            <Link to='/create'><button className="btn">Add new Habit</button></Link>
            {habits && habits.map(habit => (
                <div className="card">
                    <div className="container">
                        {/* <button className="add">options</button> */}
                        <p key={habit._id}>{habit.content} -- {habit.streak} Day Streak!</p><br/>
                        <button onClick = {() => {handleClick(habit._id)}} className="add">+1</button>
                        <button onClick = {() => {handleReset(habit._id)}} className="reset">Reset</button>
                    </div>
                </div>
                // <ul className="no-bullets">
                //     <li className="habits" key={habit._id}>{habit.content} -- {habit.streak} Day Streak!</li>
                //     <button onClick = {() => {handleClick(habit._id)}} className="add"/>
                //     <button onClick = {() => {handleReset(habit._id)}} className="reset">Reset</button>
                // </ul>
            ))}
        </div>
     );
}
 
export default HabitList;