import React from 'react';
import { Outlet } from 'react-router-dom';

function Loyout() {

  return (
    <>
      <div className='loyout'>
        <Outlet />
      </div>
    </>
  )
}

export { Loyout }
