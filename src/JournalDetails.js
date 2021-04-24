// import { useParams, useHistory } from 'react-router-dom'
// import useFetch from './useFetch'

// const JournalDetails = () => {
//     const { id } = useParams()
//     const history = useHistory()
//     const { data : entry} = useFetch('http://localhost:8000/journal/'+id)
//     console.log(entry)
//     console.log('Here')

//     const handleClick = () => {
//         fetch(`http://localhost:8000/journal/${id}`, {
//             method : 'DELETE'
//         }).then(() => {
//             history.push('/journal')
//         })
        
//     }

//     return ( 
//         <div>
//             {entry && ( <div>
//             <h1>{entry.title}</h1>
//             <p className="details">{entry.content}</p>
//             <button className="dangerBtn" onClick={handleClick}>Delete</button>
//             </div> )}
//         </div>
        
//      );
// }
 
// export default JournalDetails;