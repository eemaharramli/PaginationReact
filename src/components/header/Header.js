import { Link } from "react-router-dom";

import './header.css'

const Header = () => {
    return(
        <header>
            <nav>
                <div className="navbar">
                    <Link to="/"><span>show</span>kes</Link>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link to={'/services'}>Services</Link>
                        </li>
                        <li>
                            <Link to={'/myWorks'}>Work</Link>
                        </li>
                        <li>
                            <Link to={'/testimonial'}>Testimonial</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;