import React from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper/index'
import { BsTwitter, BsInstagram, BsLinkedin, BsYoutube, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';

import './About.scss'

const About = () => {
  return (
    <div className='app__about'>
      <h2 className='head-text'>Sobre mi</h2>

      <div className='about__container'>
      <div className='about__container-image'>
        <img src={images.about}/>
      </div>

      <div className='about__container-text'>
        <h1 className='head-text'>Joseph Jeffrey Reyes Samayoa</h1>

        <p>“ Busco ser un fotógrafo que brinde un servicio de calidad, preocupándome por cada detalle tanto en una sesión como en un evento para conseguir resultados exelentes. Generar confianza en mis clientes para trabajar en un ambiente agradable partiendo siempre desde el respeto y la cordialidad “</p>
      </div>

      
      </div>

      

    </div>
  )
}

// export default About

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'sobre mi',
);