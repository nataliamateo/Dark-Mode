import React from 'react';
import './App.scss';
import Header from './Header';
import People from './People';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <People />
      </div>
    </div>
  );
}

export default App;
