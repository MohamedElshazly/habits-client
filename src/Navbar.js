import { Link } from 'react-router-dom'

const Navbar = () => {
    
    return ( 
        <nav className="navbar">
            <div className="links">
                <Link to='/journal'>Journal</Link>
                <Link to='/habits'>Habits</Link>
                <Link to='/'>Home</Link>
            </div>
            
        </nav>
     );
}
 
export default Navbar;