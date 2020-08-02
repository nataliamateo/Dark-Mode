import React from 'react';
import '../stylesheets/SwitchBtn.scss';

const SwitchBtn = () => {
  const handleClick = () => {
    const btnSwitch = document.querySelector('#switch');
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    // save mode on localstorage
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('dark-mode', 'true');
    } else {
      localStorage.setItem('dark-mode', 'false');
    }
  };

  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

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
