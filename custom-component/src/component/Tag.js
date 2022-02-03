import { useRef, useState } from 'react';

const Tag = () => {
  const [inputs, setInputs] = useState({
    tag: '',
  });

  const { tag } = inputs;

  // default 저장된 정보
  const [hashTags, setHashTags] = useState([
    {
      id: 1,
      tag: 'CodeStates',
    },
  ]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(2); //  default 저장된 정보 에 접근해 새로운 id를 만들어주기 위한 hook

  const onCreate = (e) => {
    if (e.key === 'Enter') {
      const hashTag = {
        id: nextId.current,
        tag,
      };
      setHashTags(hashTags.concat(hashTag));
      setInputs({
        tag: '',
      });
      nextId.current += 1;
    }
  }; // 새로운 hashTags에 엔터 값을 받아서 배열을 건드리지 않고 새로운 아이디 및 데이터 추가 그후에 인풋의 상태 초기화

  const onRemove = (id) => {
    setHashTags(hashTags.filter((hashTag) => hashTag.id !== id));
  };

  return (
    <section className='tagSection'>
      <h2 className='tag_h2'>Tag</h2>

      <div className='tagBox'>
        {hashTags.map((tag, index) => {
          return (
            <div className='tag' key={tag.id}>
              <p>{tag.tag}</p>
              <button onClick={() => onRemove(tag.id)}>x</button>
            </div>
          );
        })}
        <input
          autoFocus
          name='tag'
          value={tag}
          onChange={onChange}
          className='tagInput'
          onKeyPress={onCreate}
          placeholder='Press enter to add tags'
        />
      </div>
    </section>
  );
};

export default Tag;
