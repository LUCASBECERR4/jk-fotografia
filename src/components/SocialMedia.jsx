import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsYoutube, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';

import './SocialMedia.scss'

const SocialMedia = () => (
  <div className="app__social">

    <div className='app__social-icon'>
      <a href='https://wa.me/+14438675442?text=Hola%20me%20gustaría%20contratarte%20' target="blank"><BsWhatsapp/></a>
    </div>
    <div className='app__social-icon'>
      <a href='https://www.facebook.com/jeffreyfotokings?mibextid=ZbWKwL' target="blank"><FaFacebookF/></a>
    </div>

    <div className='app__social-icon'>
      <a href='https://www.instagram.com/jeffreykings7/' target='blank'><BsInstagram/></a>
    </div>

    <div className='app__social-icon'>
      <a href='https://twitter.com/Jeffrey_kings7' target="blank"><BsTwitter/></a>
    </div>

    <div className='app__social-icon'>
      <a href='https://www.linkedin.com/in/jeffrey-kings-50ba74257/' target="blank"><BsLinkedin/></a>
    </div>

    <div className='app__social-icon'>
      <a href='https://www.youtube.com/channel/UCixDIxmDAqRWdlA0apfWLNw' target="blank"><BsYoutube/></a>
    </div>

    <div className='app__social-icon'>
      <a href='https://www.tiktok.com/@jeffreykings' target="blank"><FaTiktok/></a>
    </div>

  </div>
);

export default SocialMedia;