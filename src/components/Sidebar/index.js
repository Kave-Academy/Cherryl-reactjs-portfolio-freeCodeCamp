import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from "../../assets/images/logo-s.png"
import LogoSubtitle from "../../assets/images/logo_sub.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook, faGithub, faLinkedinIn, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFacebook, faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () =>  (
  <div className="nav-bar">
    <Link className='logo' to='/'>
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#ffff"/>
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#ffff"/>
      </NavLink>
      <NavLink exact="true" activeclassname="active"className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#ffff"/>
      </NavLink>
    </nav>


   {/* SOCMED SECTION */}

    <ul>
      <li>
        <a target="_blank" rel='noreferrer' href='https://www.facebook.com/chedj009'>
          <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel='noreferrer' href='https://github.com/chedj09'>
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel='noreferrer' href='https://twitter.com/chedj009'>
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UC1vC5ifpYJnv2-DiyBH0Zog'>
          <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
        </a>
      </li>
    </ul>



     {/* END OF SOCMED SECTION */}

  </div>
  )

export default Sidebar