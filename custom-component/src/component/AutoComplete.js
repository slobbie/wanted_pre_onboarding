// 1.인풋창의 온체인지 이벤트
// 2. 검색어를 담을 상태값
// 3. 마우스 클릭이벤트
// 4. 검색어 리셋 이벤트

import { useState } from 'react';

const AutoComplete = () => {
  const [searchData, setSearchData] = useState([]);
  const [valueData, setValueData] = useState('');
  const data = [
    '중고A급',
    'refurbished',
    'vintage',
    'art',
    'apple',
    'age',
    'body',
    'box',
    'bass',
    'can',
    'cow',
    'dry',
    'dag',
    'dot',
    'react',
    'title',
    'type',
    'six',
    'sun',
    'stone',
  ];
  const matchName = (name, keyword) => {
    name = name.toLowerCase().substring(0, keyword.length);
    if (keyword === '') return false;
    return name === keyword.toString().toLowerCase();
  };
  const onChange = (e) => {
    const result = data
      .filter((item) => matchName(item, e.target.value))
      .sort((a, b) => a.length - b.length);
    setSearchData(result);
    setValueData(e.target.value);
  };

  const onRemove = (e) => {
    e.preventDefault();
    setValueData('');
  };
  const onComplete = (list) => {
    setValueData(list);
    setSearchData([]);
  };
  return (
    <section className='AutoCompleteSect'>
      <h2 className='Auto_h2'>AutoComplete</h2>
      <div className='searchBox'>
        <input
          className='search_input'
          placeholder='Please browse here'
          onChange={onChange}
          value={valueData}
        />
        <button onClick={onRemove}>x</button>
      </div>
      <div className='serchdata'>
        {searchData?.map((list, idx) => (
          <div
            className='serchdataList'
            key={idx}
            onClick={() => onComplete(list)}
          >
            {list}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AutoComplete;

// const AutoComplete = () => {
//   const [inputText, setInputText] = useState('');
//   const data = [
//     '중고A급',
//     'refurbished',
//     'antique',
//     'rustic',
//     'remove',
//     'rock',
//   ];

//   const currentInputText = (e) => {
//     setInputText(e.target.value);
//   };

//   const eraseInput = () => {
