import { useState } from 'react';

const Tab = () => {
  const [activeIndex, setActiveIndex] = useState(0); // active를 담아줄 상태값

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  }; // 저장된 인덱스 정보로 active 핸들링을 하기 위한 이벤트

  const tabArray = [
    {
      idx: 0,
      tabTitle: (
        <div
          className={
            activeIndex === 0 ? 'is-active tabs_select' : 'tabs_noneSelect'
          }
          onClick={() => tabClickHandler(0)}
        >
          TAB1
        </div>
      ),
      tabcontent: <div>Tab menu ONE</div>,
    },
    {
      idx: 1,
      tabTitle: (
        <div
          className={
            activeIndex === 1 ? 'is-active tabs_select' : 'tabs_noneSelect'
          }
          onClick={() => tabClickHandler(1)}
        >
          TAB2
        </div>
      ),
      tabcontent: <div>Tab menu TWO</div>,
    },
    {
      idx: 2,
      tabTitle: (
        <div
          className={
            activeIndex === 2 ? 'is-active tabs_select' : 'tabs_noneSelect'
          }
          onClick={() => tabClickHandler(2)}
        >
          TAB3
        </div>
      ),
      tabcontent: <div>Tab menu THREE</div>,
    },
  ];

  return (
    <section className='tabSection'>
      <div className='tabBox'>
        <h2 className='tab_h2'>Tab</h2>
        <ul className='Tabmenu'>
          {tabArray.map((section) => {
            return <li key={section.idx}>{section.tabTitle}</li>;
          })}
        </ul>
      </div>
      <div className='tabcontBox'>{tabArray[activeIndex].tabcontent}</div>
    </section>
  );
};

export default Tab;
