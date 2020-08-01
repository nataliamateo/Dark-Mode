import React from 'react';
import '../stylesheets/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <ul className='header__nav--list'>
          <li className='list__links'>
            <a href='#Inicio' alt='Inicio'>
              <div className='list__container'>
                <i className='fas fa-home list__container--icon'></i>Inicio
              </div>
            </a>
          </li>
          <li className='list__links'>
            <a href='#Perfil' alt='Perfil'>
              <div className='list__container'>
                <i className='far fa-user list__container--icon profile'></i>Perfil
              </div>
            </a>
          </li>
          <li className='list__links'>
            <a href='#Mensajes' alt='Mensajes'>
              <div className='list__container'>
                <i className='far fa-envelope list__container--icon'></i>Mensajes
              </div>
            </a>
          </li>
          <li className='list__links'>
            <a href='#Amigos' alt='Amigos'>
              <div className='list__container'>
                <i className='fas fa-user-friends list__container--icon friends'></i>Amigos
              </div>
            </a>
          </li>
          <li className='list__links'>
            <a href='#Ajustes' alt='Ajustes'>
              <div className='list__container'>
                <i className='fas fa-cog list__container--icon'></i>Ajustes
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
