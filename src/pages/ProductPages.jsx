import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//components
import DescriptionProduct from '../components/DescriptionProduct';
import Salesman from '../components/Salesman';
import Slidere from '../components/Slider';
import Modal from '../components/Modal';
//style
// import "../styles/productPages.scss";

export default function ProductPages() {
  const location = useLocation();
  const product = location.state && location.state.product;
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  if (!product) {
    return error && (<Modal text="Сторінка не знайдена" setError={setError} />);
  }

  return (
    <div className='bg-gray-200 p-5 flex flex-col gap-8 '>
      <div className="button w-max" onClick={handleBackClick}>Повернутись назад</div>
      <div className='flex gap-8 flex-col md:flex-row md:justify-between'>
        <Slidere listPhotoSrc={product.photos} />
        <Salesman product={product} />
      </div>
      <DescriptionProduct description={product.description} />
    </div>
  );
}
