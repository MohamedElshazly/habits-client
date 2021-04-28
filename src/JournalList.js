import { Link } from 'react-router-dom'
// import JournalDetails from './JournalDetails'
import React from 'react'
import  useIsLoggedIn  from './useIsLoggedIn'
const JournalList = ({entries}) => {
    const {loggedInStatus} = useIsLoggedIn('http://localhost:4000/auth/is-logged-in')

    return ( 
        <div className="content">
            {loggedInStatus===0 ? (
                <h1>You need to log in first...</h1>
            ):
            (
            <React.Fragment>
            <Link to='/add-entry'><button className="btn">Add New Journal Entry</button></Link>
            {entries && entries.map(entry => (
                <div className="container" key={entry._id}>
                    <Link to = {`/entries/${entry._id}`}><h2>{entry.title}</h2></Link>
                    <p>{entry.content.slice(0, 10)}...</p>
                    <p>Written by {entry.user}</p>
                </div>
            ))}
            </React.Fragment>
            )}
        </div>
     );
}
 
export default JournalList;