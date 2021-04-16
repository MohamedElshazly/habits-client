import HabitList from './HabitList';
import useFetch from './useFetch';
// import { useEffect } from 'react'

const Habit = () => {
    const { data : habits, setData } =  useFetch('http://localhost:8000/habits/')
    console.log(habits)
    
    return (
        <HabitList  habits= {habits} setData={setData}/> 

     );
     
}
 
export default Habit;