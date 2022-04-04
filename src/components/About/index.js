import { faBootstrap, faCss3, faGitAlt,faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'

const About = () => {
  
  const [letterClass, setLetterClass] = useState ('text-animate');

  
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return(
    <>
  <div className='container about-page'>
    <div className="text-zone">
      <h1>
        <AnimatedLetters
        letterClass={letterClass}
          strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
          idx={15}
        />
      </h1>
      <p> I'm very ambitious front-end developer looking fo a role in established IT company with the opportunity to work with the latest technologies on challenging and diverse projects</p>
      <p>I'm quietly confident, naturally curious, and perpetually working on imporving my chops one design problem at a time</p>
      <p> If I need to define myself in one sentence that would be a family person, a beautiful daughter, a sports fanatic, photography enthusiast and tech obssessed!</p>
    </div>

    <div className='stage-cube-cont'>
      <div className="cubespinner">
        <div className="face1">
          <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faJs} color="#EFD81D"/>
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faGitAlt} color="#ec4d28"/>
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faBootstrap} color="#7625F2"/>
        </div>
      </div>

    </div>
  </div>
  <Loader type='pacman' />
  </>
  )}

export default About