import { Link } from "react-router-dom";
import '../../css/Navbar.css';



function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">movie App</Link>
        </div>
        <div className="navbarlinks">
            <Link to="/" className="navbarhome">Home</Link>
            <Link to="/Favorites" className="navbarfavorites">Favorites</Link>
        </div>
    </nav>
}
export default NavBar;