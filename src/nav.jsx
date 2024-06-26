import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h1>Travel Info Card</h1>

        <div className="links">
        <Link to="/">Home</Link>
            <Link to="/create">New Traveller</Link>

        </div>
        </nav>
     );
}

 
export default Navbar ;