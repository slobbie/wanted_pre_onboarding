import './App.css';
import React from 'react';
import Toggle from './component/Toggle';
import Header from './layout/Header';

import Modal from './component/Tab';

function App() {
  return (
    <div className='App'>
      <div className='mainPage'>
        <Header />
        <Toggle />
        <Modal />
      </div>
    </div>
  );
}

export default App;
