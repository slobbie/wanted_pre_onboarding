import { useState } from 'react';

export const ModalPopup = ({ onCloes }) => {
  return (
    <di className='ModalPopup'>
      <button onclick={onCloes}>X</button>
      <p>Hello</p>
    </di>
  );
};

const Modal = () => {
  const [Toggle, setToggle] = useState(false);

  const onclick = () => {
    setToggle(true);
  };

  const onCloes = () => {
    setToggle(false);
  };
  return (
    <section className='ContainerBox'>
      <button className='Modal_btn' onClick={onclick}>
        OPEN Modal
      </button>
      {Toggle ? <ModalPopup onCloes={onCloes} /> : null}
    </section>
  );
};

export default Modal;
