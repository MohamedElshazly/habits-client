import HabitList from './HabitList';
// import useFetch from './useFetch';
import { useState, useEffect } from 'react'
import Axios from 'axios'

const Habit = () => {
    const [habits, setHabits] = useState('')
    useEffect(() => {
        Axios({
            method:"GET",
            url: "http://localhost:4000/list-habits",
            withCredentials:true
        }).then((res) => {
            setHabits(res.data)
            // console.log(res.data)
        })

    }, [])
    
    return (
        <HabitList  habits= {habits} setData={setHabits}/> 

     );
     
}
 
export default Habit;