import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper/index'

import Gallery from './Gallery';

import './Work.scss'

const Work = () => {
  // const [animateCard, setAnimateCard] = useState({ y: 0, opasity: 1 });


  return (
    <div className='app__work'>
    <h2 className='head-text'>Mis trabajos</h2>
    
    <Gallery />

    </div>
  )
}

export default AppWrap(MotionWrap(Work, 'app__work'),
'portafolios',
);