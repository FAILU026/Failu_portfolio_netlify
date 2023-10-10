import React from 'react';
import './service.css';
import {BiCheck} from 'react-icons/bi';

const Service = () => {
  return (
   <section id='service'>
     
    <div className='service_title'>
        
        <h1>Service</h1>
        
    </div>
    <p className='para'>What I Offer</p>
   
    <div className='service_containers'>
    <article className='service-container'>
        <div className='service-head'>
            <h3>FullStack Development</h3>
        </div>
        
        <ul className='service-list'>
            <li>
            <BiCheck className='service-icon'  />
                <p >I will develop a FullStack website using HTML, CSS, BootStrap,Tailwind Css, JavaScript, React Js, Node Js and Database.</p>
                </li>     
            <li>
            <BiCheck className='service-icon'  />
                <p>I will develop a modern responsible static website.</p>
                </li>  
            <li>
            <BiCheck  className='service-icon' />
                <p>I tend to code things from scratch and enjoy bringing ideas to pfe in the browser.</p>
                </li>
                
            <li>    
            <BiCheck className='service-icon'  />
                <p>I position your company brand.</p>
                </li>
                
        </ul>
        
        </article>
        <article className='service-container'>
        <div className='service-head'>
            <h3>UI/UX Design</h3>
        </div>
        <ul className='service-list'>
        <li>
            <BiCheck className='service-icon'  />
                <p>I will do UI UX design for your web or mobile app.</p>
                </li>
                <li>
            <BiCheck className='service-icon'  />    
                <p>I will develop a modern and fully responsive  website.</p>
                </li>
                <li>
            <BiCheck className='service-icon'  />
                <p>I will design, redesign or update the design for the website and landing page</p>
                </li>
                <li>
            <BiCheck className='service-icon'  />
                <p>I will design web landing page PSD, web banners, and creative mobile app UI.</p>
                </li>
        </ul>
        
        </article>
        <article className='service-container'>
        <div className='service-head'>
            <h3>Graphic Design</h3>
        </div>
        <ul className='service-list'>
        <li>
            <BiCheck className='service-icon'  />
                <p>I will design creative and professional infographics.</p>
                </li>
                <li>
            <BiCheck className='service-icon'  />
                <p>I will design professional website banners or headers.</p>
                </li>
                <li>
            <BiCheck className='service-icon'  />
                <p>I will design professional social media posts, Facebook posts,Instagram posts, pnkedIn posts, and ads.</p>
                </li>
                <li>
            <BiCheck className='service-icon'  />
                <p>I will design a modern minimalist unique luxury logo design.</p>
                </li>

        </ul>
            
        
        </article>

    </div>
   </section>
  )
}

export default Service