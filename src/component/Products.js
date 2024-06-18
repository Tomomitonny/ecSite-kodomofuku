import React, { useState } from 'react';
import Itemcard from './Itemcard';
import Tabs from './Tabs';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'category1', name: 'Category 1' },
  { id: 'category2', name: 'Category 2' },
  // 他のカテゴリーを追加
];

const products = [
  { id: 1, category: 'category1', title: 'Product 1', price: 100, img: 'path/to/img1' },
  { id: 2, category: 'category2', title: 'Product 2', price: 200, img: 'path/to/img2' },
  // 他の製品を追加
];

const Products = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div>
      <Tabs
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <Itemcard key={product.id} item={product} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
