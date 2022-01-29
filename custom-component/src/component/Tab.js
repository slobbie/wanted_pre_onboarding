import { useState } from 'react';

const Tab = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const tabArray = [
    {
      idx: 0,
      tabTitle: (
        <div
          className={activeIndex === 0 ? 'is-active' : ''}
          onClick={() => tabClickHandler(0)}
        >
          TAB1
        </div>
      ),
      tabcontent: <div>내용물1</div>,
    },
    {
      idx: 1,
      tabTitle: (
        <div
          className={activeIndex === 1 ? 'is-active' : ''}
          onClick={() => tabClickHandler(1)}
        >
          TAB2
        </div>
      ),
      tabcontent: <div>내용물3</div>,
    },
    {
      idx: 2,
      tabTitle: (
        <div
          className={activeIndex === 2 ? 'is-active' : ''}
          onClick={() => tabClickHandler(2)}
        >
          TAB3
        </div>
      ),
      tabcontent: <div>내용물3</div>,
    },
  ];

  return (
    <div className='ContainerBox'>
      <ul>
        {tabArray.map((section) => {
          return <li key={section.idx}>{section.tabTitle}</li>;
        })}
      </ul>
      <div>{tabArray[activeIndex].tabcontent}</div>
    </div>
  );
};

export default Tab;
