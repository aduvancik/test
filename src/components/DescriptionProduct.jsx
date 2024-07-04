import React from 'react';

export default function DescriptionProduct({ description }) {
  return (
    <div className=' bg-white p-[20px]'>
      <h2 className='text-2xl'>Опис</h2>
      <p className='text-base mt-[20px]'>{description}</p>
      <div className='h-[2px] mt-[5px] w-full bg-black'></div>
    </div>
  )
}
