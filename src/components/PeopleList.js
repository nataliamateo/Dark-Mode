import React from 'react';
import '../stylesheets/PeopleList.scss';
import People from './People';

const PeopleList = () => {
  return (
    <div className='people-container'>
      <People />
      <People />
      <People />
      <People />
      <People />
    </div>
  );
};

export default PeopleList;
