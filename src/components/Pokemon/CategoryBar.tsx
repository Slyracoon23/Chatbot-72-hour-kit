import React, { useState } from 'react';
import { FaTshirt, FaLaptop, FaBook, FaHome, FaBasketballBall } from 'react-icons/fa';

const CategorySelector = () => {
  const categories = [
    { name: "Fashion", icon: <FaTshirt /> },
    { name: "Electronics", icon: <FaLaptop /> },
    { name: "Books", icon: <FaBook /> },
    { name: "Home", icon: <FaHome /> },
    { name: "Sports", icon: <FaBasketballBall /> }
  ];
  
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="flex mb-4">
        {categories.map((category, index) => (
          <button 
            key={index}
            onClick={() => setSelectedCategory(category.name)}
            className={`mx-2 p-2 rounded-full 
                       ${selectedCategory === category.name ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}>
            {category.icon}
          </button>
        ))}
      </div>
      <div className="text-xl">
        {selectedCategory}
      </div>
    </div>
  );
};

export default CategorySelector;
