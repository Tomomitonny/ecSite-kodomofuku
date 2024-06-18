import React from 'react';

const Tabs = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex border-b">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`p-4 ${selectedCategory === category.id ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => onSelectCategory(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

