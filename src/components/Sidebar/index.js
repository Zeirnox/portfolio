import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/J1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={Logo} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#FFFFFF" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#FFFFFF" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="projects-link"
        to="/projects"
      >
        <FontAwesomeIcon icon={faMugHot} color="#FFFFFF" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/zeirnox">
          <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
