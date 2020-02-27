import React, { useState } from 'react';

type CreateProps = {
  onAdd: (title: string) => void;
};

export const CreateForm: React.FC<CreateProps> = props => {
  const [item, setItem] = useState({
    title: ''
  });

  const addItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    // 値を保存
    if (item) {
      props.onAdd(item.title);
    }
    // 値をリセット
    setItem({
      title: ''
    });

    event.preventDefault();
  };

  // 値を更新するメソッド
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setItem(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="やること"
          onChange={handleChange}
          value={item?.title}
        />
        <button onClick={addItem}>＋</button>
      </form>
    </div>
  );
};
