import { Link } from 'react-router-dom'

const HabitList = ({habits, setData}) => {
    
    const handleClick = (id) => {
        let oldHabits = [...habits];
        let habit = oldHabits.filter(habit => habit.id === id)[0];
        habit.streak += 1;
        let habitIndex = oldHabits.indexOf(habit);
        oldHabits[habitIndex] = habit; 
        setData(oldHabits);
        fetch(`http://localhost:8000/habits/${id}`, {
            method : 'PUT', 
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(habit)
        }).then(() => {
            console.log("Put request done")
        })
    }
    const handleReset = (id) => {
        let oldHabits = [...habits];
        let habit = oldHabits.filter(habit => habit.id === id)[0];
        habit.streak = 0;
        let habitIndex = oldHabits.indexOf(habit);
        oldHabits[habitIndex] = habit; 
        setData(oldHabits);
        fetch(`http://localhost:8000/habits/${id}`, {
            method : 'PUT', 
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(habit)
        }).then(() => {
            console.log("Put request done")
        })
    }
    return ( 
        <div className="container">
            <Link to='/create'><button className="btn">Add new Habit</button></Link>
            {habits && habits.map(habit => (
                <ul className="no-bullets">
                    <li className="habits" key={habit.id}>{habit.content} -- {habit.streak} Day Streak!</li>
                    <button onClick = {() => {handleClick(habit.id)}} className="add"/>
                    <button onClick = {() => {handleReset(habit.id)}} className="reset">Reset</button>
                </ul>
            ))}
        </div>
     );
}
 
export default HabitList;