import { useEffect, useState } from 'react';

export const ModalPopup = ({ modalSwitch }) => {
  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      modalSwitch();
    }
  };

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <di className='Modaldim' onClick={onCloseModal}>
      <div className='ModalPopup'>
        <button onClick={onCloseModal}>X</button>
        <p>HELLO CODESTATES!</p>
      </div>
    </di>
  );
};

const Modal = () => {
  const [Toggle, setToggle] = useState(false); // 버튼의 상태를 관리 하기위한것

  const modalSwitch = () => {
    setToggle(!Toggle); // 토글 이벤트
  };

  return (
    <section className='modalSection'>
      <h2 className='modal_h2'>Modal</h2>
      <div className='modalBox'>
        <button className='Modal_btn' onClick={modalSwitch}>
          OPEN Modal
        </button>
        {Toggle && <ModalPopup modalSwitch={modalSwitch} />}
        {/* 모달로 띄우고 싶은 컨텐츠를 부분렌더링을 이용하여 컨트롤한다. */}
      </div>
    </section>
  );
};

export default Modal;
