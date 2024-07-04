import React, { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const savedProducts = JSON.parse(localStorage.getItem('products'));
        if (savedProducts && savedProducts.length > 0) {
          setProducts(savedProducts);
          setLoading(false);

        } else {
          const response = await fetch('products.json');
          const data = await response.json();
          setProducts(data);
          localStorage.setItem('products', JSON.stringify(data));
          setLoading(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filterProducts = () => {
    let filteredProducts = [...products];

    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory && selectedCategory !== 'all') {
      filteredProducts = filteredProducts.filter(product =>
        product.category === selectedCategory
      );
    }

    if (minPrice) {
      filteredProducts = filteredProducts.filter(product =>
        product.price >= parseInt(minPrice)
      );
    }

    if (maxPrice) {
      filteredProducts = filteredProducts.filter(product =>
        product.price <= parseInt(maxPrice)
      );
    }

    if (sortBy === 'cheap') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'dear') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    return filteredProducts;
  };

  return (
    <ProductsContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        searchTerm,
        setSearchTerm,
        maxPrice,
        setMaxPrice,
        minPrice,
        setMinPrice,
        sortBy,
        setSortBy,
        products: filterProducts(),
        loading,
        error,
        setError,
        handleCategoryClick,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
