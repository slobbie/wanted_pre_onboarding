import React from 'react';
import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';
import './style/init.scss';

function App() {
  return (
    <div className='App'>
      <div className='mainPage'>
        <Toggle />
        <Modal />
        <Tab />
        <Tag />
        <AutoComplete />
        <ClickToEdit />
      </div>
    </div>
  );
}

export default App;
