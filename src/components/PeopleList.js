import React from 'react';
import '../stylesheets/PeopleList.scss';
import People from './People';

const PeopleList = () => {
  return (
    <div className='people-container'>
      <People name='Totoro Ghibli' image='./images/totoro.jpg' />
      <People name='Chihiro Ghibli' image='/images/chihiro.jpg' />
      <People name='Haku Ghibli' image='./images/haku.jpg' />
      <People name='Howl Ghibli' image='./images/howl.jpg' />
      <People name='Calcifer Ghibli' image='./images/calcifer.gif' />
      <People name='Mononoke Ghibli' image='./images/mononoke.jpg' />
    </div>
  );
};

export default PeopleList;
