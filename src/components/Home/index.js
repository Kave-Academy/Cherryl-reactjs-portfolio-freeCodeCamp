import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import './index.scss'
import { useEffect, useState } from 'react';
import Logo from './Logo'
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {

  const [letterClass, setLetterClass] = useState ('text-animate');
  const nameArray = ['e', 'r', 'i', 'a'];
  const jobArray = ['W', 'e', 'b', 'D', 'e', 'v', 'e', 'l','o', 'p', 'e', 'r', '.'];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])


  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i</span>
        <br/>
        <span className={`${letterClass} _15`}>I</span>
        <span className={`${letterClass} _18`}>'m</span>
        <img src={LogoTitle} alt="developer" />
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}
        />
        <br />
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}
        />
        </h1>
        <h2>Frontend Developer / HTML / CSS / JavaScript / ReactJS Expert</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
      <Logo/>
    </div>
  )
}
export default Home