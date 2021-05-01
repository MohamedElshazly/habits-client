import { Link } from 'react-router-dom'
// import JournalDetails from './JournalDetails'
import React from 'react'
const JournalList = ({entries}) => {

    return ( 
        <div className="content">
            
            <React.Fragment>
            <Link to='/add-entry'><button className="btn">Add New Journal Entry</button></Link>
            {entries && entries.map(entry => (
                <div className="card">
                    <div className="container" key={entry._id}>
                    <Link to = {`/entries/${entry._id}`} className="entry-link">
                            <h2>{entry.title}</h2>
                            <p>{entry.content.slice(0, 10)}...</p>
                            <p>Written by {entry.user}</p>
                        </Link>
                    </div>
                </div>
                
            ))}
            </React.Fragment>
           
        </div>
     );
}
 
export default JournalList;