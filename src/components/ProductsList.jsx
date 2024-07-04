import React, { useState, useMemo, useContext, useEffect } from 'react';
import Product from './Product';
import { ProductsContext } from '../Context/ProductContext';

const PAGE_LIMIT = 6;

const ProductsList = () => {
  const { products } = useContext(ProductsContext);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    setActivePage(0);
  }, [products]);

  const { pagItems, pagStart, pagEnd } = useMemo(() => {
    const pageCount = Math.ceil(products.length / PAGE_LIMIT);
    const pagItems = [];

    for (let index = 0; index < pageCount; index++) {
      pagItems.push(
        <button
          key={index}
          onClick={() => setActivePage(index)}
          className={`px-4 py-2 border-2 border-black rounded-md ${activePage === index ? 'bg-black text-white' : 'bg-white text-black'} focus:outline-none`}
        >
          {index + 1}
        </button>
      );
    }

    const pagStart = activePage * PAGE_LIMIT;
    const pagEnd = pagStart + PAGE_LIMIT;

    return {
      pagItems,
      pagStart,
      pagEnd,
    };
  }, [products, activePage]);


  return (
    <div className='productsList bg-white 00 p-4 pb-20' id="productsList">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">Оголошення</h1>
        {products.length > 0 ? (
          <>
            <ul className="grid lg-flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-max mx-auto">
              {products.slice(pagStart, pagEnd).map(product => (
                <Product key={product.id} product={product} />
              ))}
            </ul>
            <div className="flex justify-center mt-4 space-x-2">{pagItems}</div>
          </>
        ) : (
          <h2 className='text-2xl md:text-3xl font-bold text-center mt-6'>Оголошень незнайдено</h2>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
