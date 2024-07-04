import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { routes } from '../routes';
import { HOME_ROUTE} from '../utils/consts';
//components
import { Loyout } from './Loyout';
import HomePages from '../pages/HomePages';

export default function AppRouter() {

  
  return (
    <Routes>
        <Route path="/" element={<Loyout />}>

          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} exact />
          ))}
          <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
          <Route index element={<HomePages />} />
        </Route>
    </Routes>
  );
}
