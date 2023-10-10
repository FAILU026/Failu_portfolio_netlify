import React from 'react'
import './about.css';
import fossfreaks from '../About/fossfreaks.PNG';
import clg from '../About/clg.png';
import school from '../About/school.jpg';


const About = () => {
  
  return (
    <section id="about">
       <div className='about'>
            <h1 className='aboutMe'>About Me</h1>
        <div className='aboutPara'>
          <p>I recently graduated with a BE in Computer Science from Srm Valliammai Engineering College. During my academic journey, I gained a strong foundation in programming languages such as Java, C, and MySql. I also developed proficiency in web development technologies such as HTML, CSS, JavaScript and React Js.</p>
        </div>
        </div>
        <div className='eduBars'>
          <div className='eduBar'>
            <img src={fossfreaks} alt="fossFreak" className="eduBarImg" />
            <div className='eduBarText'>
              <h2>Frontend Developer | Intern</h2>
              <p >FossFreaks.pvt.Ltd</p>
              <h4>Pursuing</h4>
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
          <div className='eduBar'>
            <img src={school} alt="popular" className="eduBarImg" />
            <div className='eduBarText'>
              <h2>High School</h2>
              <p>Popular Matric Hr Sec School</p>
              <h4>2017-2019 | Completed</h4>
            </div>
          </div>
          

        </div>
    </section>
   
  )
}

export default About
