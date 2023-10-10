import React from 'react';
import './skill.css';
import {BsPatchCheckFill } from 'react-icons/bs';


const Skill = () => {
  return (
    <section id='skill'>
        <h1 className='skillTitle'>Skill</h1>
        <h5>What Skills I Have</h5>
        <div className='skill_Container'>
          <div className='frontend'>
            <h3>Frontend Development</h3>
            <div className='skill_Content'>
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text_light'>Intermediate</small>
              </div>
              </article>
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text_light'>Intermediate</small>
              </div>
              </article>
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text_light'>Intermediate</small>
              </div>
              </article>
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>BootStrap</h4>
                <small className='text_light'>Intermediate</small>
              </div>
              </article>
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>TailWind</h4>
                <small className='text_light'>Intermediate</small>
              </div>
              </article>
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>React</h4>
                <small className='text_light'>Intermediate</small>
              </div>

              </article>
            </div>
          </div>
          <div className='backend'>
          <h3>Backend Development</h3>
          <div className='skill_Content'>
          <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>Node Js</h4>
                <small className='text_light'>Basic</small>
              </div>
              </article>
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>MangoDB</h4>
                <small className='text_light'>Basic</small>
              </div>
              </article>
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text_light'>Intermediate</small>
              </div>
              </article>
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>Express Js</h4>
                <small className='text_light'>Basic</small>
              </div>
              </article>
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text_light'>Basic</small>
              </div>
              </article>
            </div>
          </div>
          </div>
      
        
    </section>
  )
}

export default Skill