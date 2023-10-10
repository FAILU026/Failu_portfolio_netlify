import React from 'react';
import './contact.css';
import telegram from '../Contact/telegram.png';
import linkedin from '../Contact/linkedin.png';
import instagram from '../Contact/instagram.png';
import whatsapp from '../Contact/whatsapp.png';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contect = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z9epwf9', 'template_nq8vy7b', form.current, 'yXbKJ08_nhEuFPurg')
        .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent !')
          }, (error) => {
          console.log(error.text);
          });
        };

  return (
    <section id='contact'>
        <div className='contactPageTitle'>
            <h1>Contact Me</h1>
        </div>
       <span className='contactDesc'>
            Please fill out the form below to discuss any work opportunities.
       </span>
       <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' required placeholder='Your Name' name='user_name' />
            <input type='email' className='email' required placeholder='Your Email' name='Your_email' />
            <textarea className='msg' name='message' required rows='5' placeholder='Your Message'></textarea>
            <button type='submit'  value='Send' className='SubmitBtn'>Submit</button>
            <div className='links'>
              <a href='https://www.linkedin.com/in/failur-rahuman-s-65789323a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bd4BVSd6NR9K5eprU4xOZyg%3D%3D'>
                <img src={linkedin} alt="linkedin" className='link' />
              </a>
              <a href='https://instagram.com/_failu._?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'>
                <img src={instagram} alt="insta" className='link' />
              </a> 
              <a href='https://wa.me/qr/6VFVQ2IJCQOXL1'>  
                <img src={whatsapp} alt="whatsapp" className='link' />
              </a>
              <a href='https://t.me/Mr_5lu6'>
                <img src={telegram} alt="telegram" className='link' />
              </a>
            </div>

       </form>

        

    </section>
  )
}

export default Contect