import { Link } from 'react-router-dom'
import Axios from 'axios'
import React ,{useState, useEffect} from 'react'

const Navbar = () => {
    const [loggedInStatus, setLoggedInStatus] = useState(0)

    useEffect(() => {
        Axios({
            method:"GET",
            url:"http://localhost:4000/auth/is-logged-in",
            withCredentials:true,
        }).then((res) => {
            console.log(loggedInStatus)
            if(res.data === true){
                setLoggedInStatus(1)
            }else{
                setLoggedInStatus(0)
            }
        })
    },[loggedInStatus])

    return ( 
        <nav className="navbar">
            <div className="links">
                <Link className="items" to='/journal'>Journal</Link>
                <Link className="items" to='/habits'>Habits</Link>
                <Link className="items" to='/'>Home</Link>
                
                    {loggedInStatus===1 ?(
                        <Link className="items" to='/logout'>Logout</Link>
                    ):(
                        <React.Fragment>
                            <Link className="items" to='/login'>Login</Link>
                            <Link className="items" to='/register'>Register</Link>
                        </React.Fragment>
                    )}
                
            </div>
            
        </nav>
     );
}
 
export default Navbar;