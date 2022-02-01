import { useState } from 'react';

const ClickToEdit = () => {
  const [name, setName] = useState('김코딩');
  const [age, setAge] = useState('20');

  const nameMouseHandler = (e) => {
    setName(e.target.value);
  };

  const nameKeyHandler = (e) => {
    if (e.key === 'Enter') {
      setName(e.target.value);
    }
  };

  const ageKeyHandler = (e) => {
    if (e.key === 'Enter') {
      setAge(e.target.value);
    }
  };

  const ageMouseHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <section className='ClickSection'>
      <h2>ClickToEdit</h2>
      <div className='clickBox'>
        <div className='inputBox'>
          <h2>이름</h2>
          <input
            type='text'
            defaultValue={name}
            onBlur={nameMouseHandler}
            onKeyPress={nameKeyHandler}
          />
        </div>
        <div className='inputBox'>
          <h2>나이</h2>
          <input
            type='text'
            defaultValue={age}
            onBlur={ageMouseHandler}
            onKeyPress={ageKeyHandler}
          />
        </div>
        <div>
          <p>
            이름:{name} 나이:{age}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClickToEdit;
