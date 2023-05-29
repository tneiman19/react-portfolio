import React from 'react';

const Countdown = () => {
  return (
    <iframe 
      src="https://countingdownto.com/w4/6Goz0ljG"
      style={{
        position: 'fixed',
        top: 0,
        margin: '0!important',
        width: '100%',
        height: '3.5rem',
        zIndex: '1',
        overflow: 'hidden',
        backgroundColor: '#FF8000',
        backgroundImage: 'linear-gradient(135deg, #FF8000, #FF0000)',
      }}
      scrolling="no"
    ></iframe>
  );
};

export default Countdown;
