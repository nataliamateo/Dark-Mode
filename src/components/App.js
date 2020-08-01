import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import PeopleList from './PeopleList';
import SwitchBtn from './SwitchBtn.js';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <SwitchBtn />
        <PeopleList />
      </div>
    </div>
  );
}

export default App;
