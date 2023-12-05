import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Ritesh.dev</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Project</Link>
            <Link to="/contact">Contact</Link>
        </div>

        </nav>
      );
}
export default Navbar ;