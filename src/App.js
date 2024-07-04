import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePages from './pages/HomePages';
import ProductPages from "./pages/ProductPages";
import { Loyout } from "./components/Loyout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loyout />}>
            <Route path="/" element={<HomePages />} />
            <Route path="product/:productId" element={<ProductPages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
