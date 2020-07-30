import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <ul className='header__nav--list'>
          <li className='list__links'>
            <a href='' alt='Inicio'>
              <div className='list__container'>
                <i class='fas fa-home list__container--icon'></i>Inicio
              </div>
            </a>
          </li>
          <li className='list__links'>
            <a href='' alt='Perfil'>
              <div className='list__container'>
                <i class='far fa-user list__container--icon profile'></i>Perfil
              </div>
            </a>
          </li>
          <li className='list__links'>
            <a href='' alt='Perfil'>
              <div className='list__container'>
                <i class='far fa-envelope list__container--icon'></i>Mensajes
              </div>
            </a>
          </li>
          <li className='list__links'>
            <a href='' alt='Perfil'>
              <div className='list__container'>
                <i class='fas fa-user-friends list__container--icon friends'></i>Amigos
              </div>
            </a>
          </li>
          <li className='list__links'>
            <a href='' alt='Perfil'>
              <div className='list__container'>
                <i class='fas fa-cog list__container--icon'></i>Ajustes
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
