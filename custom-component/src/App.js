import './App.css';
import React from 'react';
import Toggle from './component/Toggle';
import Header from './layout/Header';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';

function App() {
  return (
    <div className='App'>
      <div className='mainPage'>
        <Header />
        <Toggle />
        <Modal />
        <Tab />
        <Tag />
      </div>
    </div>
  );
}

export default App;
