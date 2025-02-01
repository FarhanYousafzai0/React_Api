import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct.jsx';

const App = () => {
  const [products, setProducts] = useState([]);
  const api = "https://dummyjson.com/products"; // Corrected API URL

  const fetchData = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      console.log(data?.products); // Corrected property name
      setProducts(data?.products); // Corrected property name
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='container mx-auto'>
        <h1 className='text-4xl text-purple-600 text-center uppercase font-semibold'>Products</h1>

        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 place-content-center'>
          {products?.map((item) => (
            <SingleProduct key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
