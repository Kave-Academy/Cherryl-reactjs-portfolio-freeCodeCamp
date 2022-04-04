import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  
  const [letterClass, setLetterClass] = useState ('text-animate');

  
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return(
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
          <FontAwesomeIcon icon={faFacebook} color="#dd0031"/>
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faTwitter} color="#dd0031"/>
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faInstagram} color="#dd0031"/>
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faYoutube} color="#dd0031"/>
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faPinterest} color="#dd0031"/>
        </div>
      </div>

    </div>
  </div>
  )}

export default About