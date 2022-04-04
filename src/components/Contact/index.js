import './index.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Contact = () => {

  const [letterClass, setLetterClass] = useState ('text-animate');

  

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  return (
    <>
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} ind={15}/>
        </h1>
        <p>
          I am interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to cotnact me using below form.
        </p>
       <div className="contact-form">
         <form action="">
           <ul>
             <li className='half'>
               <input type="text" name='name' placeholder='Name' required />
             </li>
             <li className='half'>
               <input type="email" name='email' placeholder='Email' required />
             </li>
             <li>
               <input placeholder="Subject" type="text" name="subject" required />
             </li>
             <li>
               <textarea name="message" placeholder='Message' required>
               </textarea>
             </li>
             <li>
               <input type="submit" className='flat-button' value="SEND" />
             </li>
           </ul>
         </form>
       </div>
      </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Contact