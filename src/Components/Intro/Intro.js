import React from 'react'
import './intro.css';
import bg from '../Intro/bg.png';
import TextTransition, { presets } from 'react-text-transition';
import { Link } from 'react-scroll';
import {TiSocialLinkedinCircular} from 'react-icons/ti';
import {HiOutlineMail} from 'react-icons/hi';
import {DiGithubBadge} from 'react-icons/di';

const TEXTS = ['Frontend Developer', 'React Developer', 'MernStack Developer', 'FullStack Developer'];
const Intro = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section id='intro'>
        <div className='introContent'>
          
            <span className="hello">Hello,</span>
            <div className='intro-text'>
            <span className="introText">I'm <span className="introName">Failur Rahuman</span><br />
            <div>
               <span>
      <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
      </span>
             </div></span>
             </div>
           <div className='btn'>
            <Link  activeClass='active'to='contact' spy={true} smooth={true} offset={-50} duration={500} className="hList">
            <button className='hireBtn'>Hire Me</button></Link>
            <a href="/Failu_resume.pdf" download="Failur resume.pdf">

            
            <button className="cv">Downlod Cv</button>
            </a>
            </div>
            <div className='intro-icon'>
            <a href='https://www.linkedin.com/in/failur-rahuman-s-65789323a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bd4BVSd6NR9K5eprU4xOZyg%3D%3D'>
              <TiSocialLinkedinCircular className='linkedin-icon' />
              </a>
              <a href='https://github.com/FAILU026'>
              <DiGithubBadge className='git-icon' />
              </a>
              <a href='https://mail.google.com/mail/failurrahumanjpm@gmail.com'>
              <HiOutlineMail className='mail-icon' />
              </a>
              
            </div>

        </div>
            <img src={bg} alt="profile" className='introImg' />
           

        
    </section>
  )
}

export default Intro