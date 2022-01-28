import React from 'react';
import styled from 'styled-components';

const ToggleBox = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  width: 80%;
  height: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const ToggleSwitchBox = styled.div`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background-color: #c5c5c5;
`;

const ToggleButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 15px;
  margin: 5px;
  background-color: white;
`;

const ToggleText = styled.span`
  display: block;
  margin-top: 10px;
`;

const Toggle = () => {
  return (
    <ToggleBox>
      <ToggleSwitchBox>
        <ToggleButton />
      </ToggleSwitchBox>
      <ToggleText>Toggle switch ON</ToggleText>
    </ToggleBox>
  );
};
export default Toggle;
