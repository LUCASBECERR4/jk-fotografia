import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper/index'
import Form from './Form'

import './Reserva.scss'

const Reserva = () => {
  return (
    <div className='app__reserva'>
      <h2 className='head-text'>Reserva tu turno</h2>

      <Form />

    </div>
  )
}

export default AppWrap(
  MotionWrap(Reserva, 'app__about'),
  'reserva',
);