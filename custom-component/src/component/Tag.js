import { useRef, useState } from 'react';

const Tag = () => {
  const [inputs, setInputs] = useState({
    tag: '',
  });

  const { tag } = inputs;

  const [hashTags, setHashTags] = useState([
    {
      id: 1,
      tag: '',
    },
  ]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(2);

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
  };

  const onRemove = (id) => {
    setHashTags(hashTags.filter((hashTag) => hashTag.id !== id));
  };

  console.log(onRemove);

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

// 1. text를 담을 공간
// 2. 빈 배열
// 3.onchange 이벤트
// 4.create 를 만든다!
