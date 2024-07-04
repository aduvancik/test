import React, { useState } from 'react';

//style
// import "../../styles/salesMan.scss";

export default function Salesman({ product }) {
  const [phone, setPhone] = useState("Показати телефон");

  return (
    <div className='salesMan bg-white ml-0 md:ml-5 p-7 w-full md:w-1/3 flex flex-col gap-5'>
      <div className='salesMan__container-dataIcon flex items-center gap-5'>
        <p className='salesMan__data text-gray-500 text-sm mb-0'>Опубліковано {product.createdAt}</p>
      </div>
      <h1 className='salesMan__title text-xl font-light w-full break-words'>{product.title}</h1>
      <p className='salesMan__price text-xl font-black'>{product.price} грн.</p>
      <h1 className='salesMan__data text-sm text-gray-500'> контактна персона: {product.contactPerson}</h1>
      <div className='salesMan__container-button flex flex-col gap-5'>
        <button className='salesMan__button_tel button bg-white text-black hover:bg-[#002F34] hover:text-white' onClick={() => setPhone(product.telephone)}>{phone}</button>
      </div>
    </div>
  );
}
