import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper/index'
import { BsTwitter, BsInstagram, BsLinkedin, BsYoutube, BsWhatsapp, BsFillHouseDoorFill } from 'react-icons/bs';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import{ AiOutlineMail } from 'react-icons/ai'
import { images } from '../../constants';

import './Footer.scss'

const Footer = () => {
  return (
    <footer>
    
    <div className='footer-wrapper'>


      <div className='footer-body'>

        <div className='colum1'>
          <img src={images.logo} alt="logo" />
        </div>
        <div className='column2'>
          <h3>Mis Redes</h3>
          <div className='row'>
            <a href='https://www.facebook.com/jeffreyfotokings?mibextid=ZbWKwL' target="blank"><FaFacebookF /></a>
            <label htmlFor="#">Facebook</label>
          </div>
          <div className='row'>
            <a href='https://www.instagram.com/jeffreykings7/' target="blank"><BsInstagram /></a>
            <label htmlFor="#">Instagram</label>
          </div>
          <div className='row'>
             <a href='https://twitter.com/Jeffrey_kings7' target="blank"><BsTwitter /></a>
            <label htmlFor="#">Twitter</label>
          </div>
          <div className='row'>
             <a href='#' target="blank"><BsLinkedin /></a>
            <label htmlFor="#">Linkedin</label>
          </div>
          <div className='row'>
             <a href='https://www.youtube.com/channel/UCixDIxmDAqRWdlA0apfWLNw' target="blank"><BsYoutube /></a>
            <label htmlFor="#">Youtube</label>
          </div>
          <div className='row'>
             <a href='https://www.tiktok.com/@jeffreykings' target="blank"><FaTiktok /></a>
            <label htmlFor="#">Tik Tok</label>
          </div>

        </div>
        <div className='colum3'>
          <h3>Información de contacto</h3>
          <div className='row2'>
            <BsFillHouseDoorFill />
            <label>Glen Burnie, Marylan, Estados Unidos de America</label>
          </div>
          <div className='row2'>
            <BsWhatsapp />
            <label>(443) 867-5442</label>
          </div>
          <div className='row2'>
            <AiOutlineMail />
            <label>jeffreyreyessam@gmail.com</label>
          </div>
        </div>

      </div>

      <div className='container-footer'>
        <div className="copyright">
          <p className="p-text">© Jeffrey Kings All rights reserved</p>
          
        </div>
      </div>

    </div>
 
    </footer>
  )
}

// export default AppWrap(
//   MotionWrap(Footer, 'app__footer'),
//   'contacto',
// );

export default Footer