import React from 'react';
import '../stylesheets/SwitchBtn.scss';

const SwitchBtn = () => {
  const handleClick = () => {
    const btnSwitch = document.querySelector('#switch');
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
  };

  return (
    <button onClick={handleClick} className='switch' id='switch'>
      <span>
        <i className='fas fa-sun switch-icon'></i>
      </span>
      <span>
        <i className='fas fa-moon switch-icon'></i>
      </span>
    </button>
  );
};

export default SwitchBtn;
