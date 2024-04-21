import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firstLetter } from '../helperFunction';
import Col1Text from '../components/col1Text';


interface Product {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      
     <Col1Text />
<section className='max-w-1366 mx-auto px-10 pt-32 pb-16'>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {products.map(product => (
      <div key={product.id} className="w-full overflow-hidden bg-white shadow-sm p-4 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg will-change-transform">
      <Link to={`/products/${product.id}`} className="block relative">
        <div className="w-full h-64 overflow-hidden relative"> 
          <img className="w-full h-full object-contain" src={product.image} alt={product.title}
          />
          <span className="absolute top-0 right-0 bg-gray-50 text-gray-800 text-sm font-bold px-3 py-1 m-2 rounded-full border-0 border-solid border-gray-300 shadow-sm">
            {firstLetter(product.category)}
          </span>
        </div>
        <div className="text-left mt-2 ">
          <h2 className='font-normal playfair-display single-line'>{product.title}</h2> 
          <span className='font-semibold'>{`${product.price} kr`}</span>
        </div>
      </Link>
    </div>
    
    ))}
  </div>
</section>
    </div>
  );
}

export default ProductList;