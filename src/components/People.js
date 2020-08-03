import React from 'react';
import '../stylesheets/People.scss';

const People = (props) => {
  return (
    <div className='item'>
      <img className='item--photo' src={props.image} alt={props.name}></img>
      <div className='item--title'>{props.name}</div>
    </div>
  );
};

export default People;
