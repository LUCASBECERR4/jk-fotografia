import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { BsTwitter, BsInstagram, BsLinkedin, BsYoutube, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['inicio', 'sobre mi', 'portafolios', 'reserva', ].map((item) => (
          <li className="p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['inicio', 'sobre mi', 'portafolios', 'reserva', ].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li>
              <a href='https://www.instagram.com/jeffreykings7/' target='blank' className='icon'><BsInstagram/></a>
              <a href='https://wa.me/+14438675442?text=Hola%20me%20gustaría%20contratarte%20' target='blank' className='icon'><BsWhatsapp/></a>
              <a href='https://www.facebook.com/jeffreyfotokings?mibextid=ZbWKwL' target='blank' className='icon'><FaFacebookF/></a>
              <a href='https://twitter.com/Jeffrey_kings7' target='blank' className='icon'><BsTwitter/></a>
              <a href='https://www.youtube.com/channel/UCixDIxmDAqRWdlA0apfWLNw' target='blank' className='icon'><BsYoutube/></a>
              <a href='https://www.tiktok.com/@jeffreykings' target='blank' className='icon'><FaTiktok/></a>
              <a href='https://www.linkedin.com/in/jeffrey-kings-50ba74257/' target='blank' className='icon'><BsLinkedin/></a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;