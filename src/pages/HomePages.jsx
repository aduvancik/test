import React, { useContext } from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import ProductsList from '../components/ProductsList';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import { ProductsContext } from '../Context/ProductContext';

const HomePage = () => {
  const { loading, error, setError, products } = useContext(ProductsContext);
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {error && <Modal setError={setError} text="Щось пішло не так, спробуйте перезавантажити сторінку" />}
      <Search />
      <Categories />
      <ProductsList products={products} />
    </>
  );
};

export default HomePage;
