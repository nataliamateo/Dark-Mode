import React from 'react';
import '../stylesheets/People.scss';

const People = (props) => {
  return (
    <div className='item'>
      <img src={props.image}></img>
      <div className='item--title'>{props.name}</div>
    </div>
  );
};

export default People;
