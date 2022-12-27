import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['inicio', 'sobre mi', 'portafolios', 'reserva'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#d8b852' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;