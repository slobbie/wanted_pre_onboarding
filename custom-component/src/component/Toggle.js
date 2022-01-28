import React, { useState } from 'react';
import styled from 'styled-components';

// const ToggleBox = styled.div`
//   margin-top: 100px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 0 auto;
//   justify-content: center;
//   width: 80%;
//   height: 300px;
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
// `;

const ToggleSwitchBox = styled.div`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 20px;
  overflow: hidden;
  background-color: #c5c5c5;
`;

const ToggleButton = styled.button`
  width: 30px;
  height: 30px;
  display: block;
  border: none;
  border-radius: 15px;
  position: absolute;
  cursor: pointer;
  top: 29%;
  margin: 5px;
  z-index: 5;
`;

const ToggleText = styled.span`
  display: block;
  margin-top: 10px;
`;

const Toggle = () => {
  // const [text, setText] = useState('OFF');
  const [toggle, setToggle] = useState(false);
  const text = toggle ? 'ON' : 'OFF';

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <section className='ContainerBox'>
      <ToggleSwitchBox onClick={onToggle}>
        <div className={`boxiner ${toggle ? 'swichOn' : 'switchOff'}`}></div>
        <ToggleButton
          onClick={onToggle}
          className={toggle ? 'buttonOn' : 'buttonOff'}
        />
      </ToggleSwitchBox>
      <ToggleText>Toggle switch {text} </ToggleText>
    </section>
  );
};
export default Toggle;
