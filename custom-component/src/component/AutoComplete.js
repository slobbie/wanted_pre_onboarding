// 1.인풋창의 온체인지 이벤트
// 2. 검색어를 담을 상태값
// 3. 마우스 클릭이벤트
// 4. 검색어 리셋 이벤트

const AutoComplete = () => {
  return (
    <section className='AutoCompleteSect'>
      <h2 className='Auto_h2'>AutoComplete</h2>
      <div className='searchBox'>
        <input className='search_input'></input>
        <button>x</button>
      </div>
    </section>
  );
};

export default AutoComplete;
