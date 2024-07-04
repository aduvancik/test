import React, { useState, useEffect, useContext } from 'react';
import { ProductsContext } from '../Context/ProductContext';

const CategoriesItem = ({ title, alt }) => {
  const [isActive, setIsActive] = useState(false);
  const { handleCategoryClick, selectedCategory } = useContext(ProductsContext);

  useEffect(() => {
    if (selectedCategory === alt) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [selectedCategory, alt]);

  const handleClick = () => {
    handleCategoryClick(alt);
    setIsActive(!isActive); // Toggle isActive
  };

  return (
    <div
      className="categories__item w-max-content p-2 flex flex-col items-center gap-2 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
      onClick={handleClick}
    >
      <img
        className={`${isActive ? 'border-[#38bbca]' : 'border-black'} w-[70px] h-[70px] sm:min-w-[100px] sm:w-[100px] sm:h-[100px] object-cover border-[2px] border-solid rounded-[50%] `}
        src={`img/categories/${alt}.jpg`}
        alt={alt}
      />
      <p className="categories__text text-center font-semibold">{title}</p>
    </div>
  );
}

export default CategoriesItem;
