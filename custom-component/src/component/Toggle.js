import React, { useState } from 'react';
import styled from 'styled-components';

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
  position: relative;
  cursor: pointer;
  top: -42px;
  margin: 7px;
  z-index: 5;
`;

const ToggleText = styled.span`
  display: block;
  margin-top: 10px;
`;

const Toggle = () => {
  const [toggle, setToggle] = useState(false); // Toggle switch 를 관리하는 상태
  const text = toggle ? 'ON' : 'OFF'; // toggle 의 상태를 변수로 담아 부분렌더링

  const onToggle = () => {
    setToggle(!toggle);
  }; // Toggle 이벤트

  return (
    <section className='ContainerBox'>
      <ToggleSwitchBox onClick={onToggle}>
        <div className={`boxiner ${toggle ? 'swichOn' : 'switchOff'}`} />
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
