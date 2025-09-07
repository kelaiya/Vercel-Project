import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <h1 className="title">Kelaiya Parikh</h1>
            <nav className='nav'>
                <Link to="/home" className='link'>Home</Link>
                <Link to="/projects" className='link1'>Projects / Skills</Link>
                <Link to="/connect" className='link'>Contact Me</Link>
            </nav>
        </div>
    )
}
export default Navbar;