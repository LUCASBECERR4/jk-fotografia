import React from 'react';
import './App.scss';

import { About, Footer, Header, Reserva, Work  } from './container';
import { Navbar } from './components';
import { useState, memo } from 'react';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Reserva />
      <Footer />
    </div>
  )
}

export default App
