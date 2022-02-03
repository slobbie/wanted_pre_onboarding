import React, { useState } from 'react';

const Toggle = () => {
  const [toggle, setToggle] = useState(false); // Toggle switch 를 관리하는 상태
  const text = toggle ? 'ON' : 'OFF'; // toggle 의 상태를 변수로 담아 부분렌더링

  const onToggle = () => {
    setToggle(!toggle);
  }; // Toggle 이벤트

  return (
    <section className='toggleSection'>
      <h2 className='toggle_h2'>Toggle</h2>
      <div className='contentBox'>
        <div className='toggleSwitchBox' onClick={onToggle}>
          <div className={`boxinner ${toggle ? 'swichOn' : 'switchOff'}`} />
          <button
            onClick={onToggle}
            className={
              toggle ? 'buttonOn toggleButton ' : 'buttonOff toggleButton'
            }
          />
        </div>
        <p className='toggleText'>Toggle switch {text} </p>
      </div>
    </section>
  );
};
export default Toggle;
