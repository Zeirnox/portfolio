import { Link, NavLink } from 'react-router-dom'
import {useState, useEffect} from 'react'
import './index.scss'
import Logo from '../../assets/images/J1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function Sidebar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    }

    //closes mobile nav bar if you tap outside of it
    useEffect(() => {
        function handleClickOutside(event) {
          const mobileMenu = document.querySelector('.mobile');
          if (mobileMenu && !mobileMenu.contains(event.target)) {
            setShowMobileMenu(false);
          }
        }
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
      }, []);
    
    function closeMobileMenu() {
        setShowMobileMenu(false);
    };
    
    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt="logo" />
        </Link>
        <nav className="desktop">
            
                <li>
                    <NavLink exact="true" activeclassname="active" className="home-link" to="/">
                        <FontAwesomeIcon className="nav--item" icon={faHome} color="#FFFFFF" />
                    </NavLink>
                </li>
                <li>
                    <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                        <FontAwesomeIcon className="nav--item" icon={faUser} color="#FFFFFF" />
                    </NavLink>
                </li>
                <li>
                    <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                        <FontAwesomeIcon className="nav--item" icon={faMugHot} color="#FFFFFF" />
                    </NavLink>
                </li>
        </nav>

        <nav className="mobile">
        <Link className='logo-mobile' to='/' onClick={closeMobileMenu}>
            <img src={Logo} alt="logo" />
        </Link>
            <div >
                <button className="nav-button" onClick={toggleMobileMenu}>☰</button>
            </div>
            {showMobileMenu && (
                <ul className="nav-container">
                    <li>
                        <NavLink exact="true" onClick={closeMobileMenu} className="home-link" to="/">
                            <FontAwesomeIcon className="nav--item" icon={faHome} color="#FFFFFF" />
                                Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" onClick={closeMobileMenu} className="about-link" to="/about">
                            <FontAwesomeIcon className="nav--item" icon={faUser} color="#FFFFFF" />
                                About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" onClick={closeMobileMenu} className="projects-link" to="/projects">
                            <FontAwesomeIcon className="nav--item" icon={faMugHot} color="#FFFFFF" />
                                Projects
                        </NavLink>
                    </li>
                </ul>
            )}
        </nav>

        <ul className="socialMedia-container">
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/zeirnox">
                    <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
                </a>
            </li>
        </ul>
    </div>
)
}

export default Sidebar