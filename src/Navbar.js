import { Link } from 'react-router-dom'

const Navbar = () => {
    
    return ( 
        <nav className="navbar">
            <div className="links">
                <Link className="items" to='/journal'>Journal</Link>
                <Link className="items" to='/habits'>Habits</Link>
                <Link className="items" to='/'>Home</Link>
                <Link className="items" to='/logout'>Logout</Link>
            </div>
            
        </nav>
     );
}
 
export default Navbar;