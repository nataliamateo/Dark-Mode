import React from 'react';
import '../stylesheets/SwitchBtn.scss';

const SwitchBtn = () => {
  const handleClick = () => {
    document.body.classList.toggle('dark');
  };

  return (
    <button onClick={handleClick} className='switch' id='switch'>
      <span>
        <i className='fas fa-sun'></i>
      </span>
      <span>
        <i className='fas fa-moon'></i>
      </span>
    </button>
  );
};

export default SwitchBtn;
