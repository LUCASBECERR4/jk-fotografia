import React from 'react'
import Slider from '../../components/Slider/Slider'
import { AppWrap, MotionWrap } from '../../wrapper/index'

import './Header.scss'

const Header = () => {
  return (
    <div className='app__header'>
      <Slider />
    </div>
  )
}

export default AppWrap(MotionWrap(Header, 'app__header'),
'inicio',
);

// export default (Header)