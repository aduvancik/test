import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Loader from "./Loader";

const Product = ({ product, loading }) => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const navigateToProductPage = () => {
    if (product) {
      navigate(`/product/${encodeURIComponent(product.title)}`, {
        state: { product },
      });
    }
  };

  if (!product) {
    return null;
  }

  return (
    <li className="product max-w-[266px] p-1 md:p-2 border border-gray-300 rounded-md bg-white shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer" onClick={navigateToProductPage}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {error && <Modal setError={setError} text="Щось пішло не так" />}
          <img src={product.photos[0]} alt={product.title} className="product__img w-[244px] h-48 md:h-40 object-cover rounded-md" />
          <div className="mt-2 flex flex-col p-[10px] gap-[5px]">
            <h3 className="product__infoTitle text-lg font-bold mb-1 truncate">{product.title}</h3>
            <p className="product__price text-green-600 font-bold">{product.price} грн</p>
            <div className="product__place-data text-sm text-gray-700 mt-[10px]">
              <p>{product.createdAt}</p>
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default Product;
