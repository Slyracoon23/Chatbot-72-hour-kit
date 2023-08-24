import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown, FaTimes } from 'react-icons/fa';

const ListWithIcons = () => {
  const [items, setItems] = useState([
    { label: 'Item 1', count: 3 },
    { label: 'Item 2', count: 5 },
    { label: 'Item 3', count: 2 }
  ]);

  const handleIncrease = (index) => {
    const newItems = [...items];
    newItems[index].count += 1;
    setItems(newItems);
  };

  const handleDecrease = (index) => {
    const newItems = [...items];
    if (newItems[index].count > 0) {
      newItems[index].count -= 1;
      setItems(newItems);
    }
  };

  const handleReset = (index) => {
    const newItems = [...items];
    newItems[index].count = 0;
    setItems(newItems);
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      {items.map((item, idx) => (
        <div 
          key={idx} 
          className={`flex items-center justify-between p-4 my-2 rounded-md ${item.count === 0 ? 'bg-gray-400 line-through' : 'bg-gray-200'}`}
        >
          <span>{item.label}</span>
          <div className="flex items-center">
            <button onClick={() => handleDecrease(idx)} className="focus:outline-none mr-2">
              <FaArrowDown />
            </button>
            <span className="text-red-500">X {item.count}</span>
            <button onClick={() => handleIncrease(idx)} className="focus:outline-none ml-2">
              <FaArrowUp />
            </button>
            <button onClick={() => handleReset(idx)} className="focus:outline-none ml-4 text-red-500">
              <FaTimes />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListWithIcons;
