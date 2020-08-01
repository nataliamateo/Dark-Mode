import React from 'react';
import './App.scss';
import Header from './Header';
import PeopleList from './PeopleList';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <PeopleList />
      </div>
    </div>
  );
}

export default App;
