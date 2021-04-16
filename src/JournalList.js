import { Link } from 'react-router-dom'

const JournalList = ({entries, setData}) => {
    return ( 
        <div className="content">
            <Link to='/add-entry'><button className="btn">Add New Journal Entry</button></Link>
            {entries && entries.map(entry => (
                <div className="container" key={entry.id}>
                    <Link to = {`/entries/${entry.id}`}><h2>{entry.title}</h2></Link>
                    <p>{entry.content.slice(0, 10)}...</p>
                    <p>Written by {entry.user} on {entry.date}</p>
                </div>
            ))}
        </div>
     );
}
 
export default JournalList;