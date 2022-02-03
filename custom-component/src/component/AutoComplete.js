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
    'Angle',
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
    '2월 2일 설날',
    '3차 백신접종',
    '5월5일 어린이날 행사',
  ]; // 기본 검색 데이터 구축

  const connectName = (name, keyword) => {
    name = name.toLowerCase().substring(0, keyword.length); // name을 소문자로 변환해주고 0 과 키워드 길이 사이의 문자열을 반환
    if (keyword === '') return false; ///  키워드가 비었으면 false
    return name === keyword.toString().toLowerCase(); // 네임 === 키워드  소문자 문자열로 리턴해준다.
  };
  const onChange = (e) => {
    const result = data
      .filter((item) => connectName(item, e.target.value)) // 필터를 돌려 connectName 안의 value를 타겟팅 한다.
      .sort((a, b) => a.length - b.length); //문자배열에서 각 문자열의 길이를 기준으로 오름차순 정렬
    setSearchData(result); // setSearchData 안에 data 상태를 담음
    setValueData(e.target.value); // 현재 dom을 타켓으로
  };

  const onRemove = (e) => {
    e.preventDefault();
    setValueData(''); // 실행시 인풋탕 초기화
  };
  const onComplete = (list) => {
    setValueData(list);
    setSearchData([]); // 이벤트 완료시 빈배열로 만들어준다
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
