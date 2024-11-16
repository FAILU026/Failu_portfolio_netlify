import React from 'react'
import './about.css';
import fossfreaks from '../About/fossfreaks.PNG';
import clg from '../About/clg.png';
import cloud from '../About/cloud.png';


const About = () => {
  
  return (
    <section id="about">
       <div className='about'>
            <h1 className='aboutMe'>About Me</h1>
        <div className='aboutPara'>
          <p>Driven and self-motivated UI Developer, eager to utilize my knowledge and skills to contribute to organizational 
growth while continuously learning and growing professionally. I am adaptable, quick to learn, and excel at 
executing plans and strategies effectively, with a strong focus on achieving success and helping the company 
reach new height.</p>
        </div>
        </div>
        <div className='eduBars'>
        <div className='eduBar'>
            <img src={cloud} alt="" className="eduBarImg1" />
            <div className='eduBarText'>
              <h2>Junior Software Developer</h2>
              <p>Cloudnow Techmologies</p>
              <h4>May-2024 - Present</h4>
            </div>
          </div>
          <div className='eduBar'>
            <img src={fossfreaks} alt="fossFreak" className="eduBarImg" />
            <div className='eduBarText'>
              <h2>Fullstack Developer | Intern</h2>
              <p >FossFreaks. pvt. Ltd</p>
              <h4>July 2023 - Nov 2023</h4>
            </div>
          </div>
          <div className='eduBar'>
            <img src={clg} alt="srm" className="eduBarImg" />
            <div className='eduBarText'>
              <h2>Bachelor Of Engineering in Computer Science</h2>
              <p>SRM Valliammai Engineering College</p>
              <h4>2019-2023 | Completed</h4>
            </div>
          </div>
          
          

        </div>
    </section>
   
  )
}

export default About
