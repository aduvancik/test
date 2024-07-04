import React from 'react';
// import "../styles/categories.scss";
import CategiriesItem from './CategiriesItem';
import { categoriesArr } from '../listProducts';

const Categories = () => {

  return (
    <div className='categories pb-28 border '>
      <p className="categories__title mt-[100px] mb-[30px] text-center text-5xl font-black ">Категорії</p>
      <div className="categories__items flex gap-[10px] sm:gap-[20px] p-5 flex-wrap max-w-[100%]">
        {categoriesArr.map((category) => (
          <CategiriesItem
            key={category.title}
            alt={category.alt}
            title={category.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Categories;
