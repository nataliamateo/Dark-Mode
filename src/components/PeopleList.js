import React from 'react';
import '../stylesheets/PeopleList.scss';
import People from './People';

const PeopleList = () => {
  return (
    <div className='people-container'>
      <People name='1' />
      <People name='2' />
      <People name='3' />
      <People name='4' />
      <People name='5' />
      <People name='6' />
    </div>
  );
};

export default PeopleList;
