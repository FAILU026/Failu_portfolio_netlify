import React from 'react'
import './intro.css';
import bg from '../Intro/bg.png';
import { Link } from 'react-scroll';
import Typical from 'react-typical';
import {TiSocialLinkedinCircular} from 'react-icons/ti';
import {HiOutlineMail} from 'react-icons/hi';
import {DiGithubBadge} from 'react-icons/di';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Failur Rahuman</span><br />
            <div>
              <Typical
              loop={Infinity}
              steps={[
                "MernStack Developer",
                1500,
                "FullStack Developer",
                1500,
                "Frontend Developer",
                1500,
                "React Developer",
                1500,

              ]}
              />
              </div></span>
           
           <div className='btn'>
            <Link  activeClass='active'to='contact' spy={true} smooth={true} offset={-50} duration={500} className="hList">
            <button className='hireBtn'>Hire Me</button></Link>
            <a href="resume.pdf"
             download=' Failur resume.pdf'>
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