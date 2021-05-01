import HabitList from './HabitList';
// import useFetch from './useFetch';
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import  useIsLoggedIn  from './useIsLoggedIn'


const Habit = () => {
    const [habits, setHabits] = useState('')
    const {loggedInStatus} = useIsLoggedIn('https://new-habits.herokuapp.com/auth/is-logged-in')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        Axios({
            method:"GET",
            url: "https://new-habits.herokuapp.com/list-habits",
            withCredentials:true
        }).then((res) => {
            setHabits(res.data)
            setIsLoading(false)
            // console.log(res.data)
        })

    }, [])
    
    return (
        <div>
            {loggedInStatus ? (
                <React.Fragment>
                    {isLoading && <div>Loading...</div>}
                    {habits && <HabitList  habits= {habits} setData={setHabits}/>}
                    </React.Fragment>
                    ):(
                        <h1>You need to be logged in...</h1>
                        
                    )}
                   
                        
        </div>
         

     );
     
}
 
export default Habit;