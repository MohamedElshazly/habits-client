import { Link } from 'react-router-dom'
import JournalDetails from './JournalDetails'

const JournalList = ({entries}) => {
    return ( 
        <div className="content">
            <Link to='/add-entry'><button className="btn">Add New Journal Entry</button></Link>
            {entries && entries.map(entry => (
                <div className="container" key={entry._id}>
                    <Link to = {`/entries/${entry._id}`}><h2>{entry.title}</h2></Link>
                    <p>{entry.content.slice(0, 10)}...</p>
                    <p>Written by {entry.user}</p>
                </div>
            ))}
        </div>
     );
}
 
export default JournalList;