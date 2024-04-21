import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firstLetter } from '../helperFunction';

interface Product {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
}

interface RelatedProductProps {
  currentCategory: string; // This prop should be passed from the parent component
}

export default function RelatedProduct({ currentCategory }: RelatedProductProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data: Product[] = await response.json();
        // Filter by category and limit to 4 products
        const filteredProducts = data.filter(product => product.category === currentCategory).slice(0, 4);
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, [currentCategory]); // Dependency on currentCategory ensures re-fetching when category changes

  return (
    <section className="pt-16 pb-16 mb-16 bg-[#EFEFF0]">
      <div className="max-w-1366 container mx-auto px-10">
        <h2 className='playfair-display font-semibold text-3xl pb-4'>You May Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="w-full overflow-hidden bg-white shadow-sm p-4 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg will-change-transform">
              <Link to={`/products/${product.id}`} className="block relative">
                <div className="w-full h-64 overflow-hidden relative">
                  <img
                    className="w-full h-full object-contain"
                    src={product.image}
                    alt={product.title}
                  />
                  <span className="absolute top-0 right-0 bg-gray-50 text-gray-800 text-sm font-bold px-3 py-1 m-2 rounded-full border-0 border-solid border-gray-300 shadow-md">
                    {firstLetter(product.category)}
                </span>
                </div>
                <div className="text-left mt-4">
                  <h2 className='font-normal playfair-display single-line'>{product.title}</h2>
                  <span className='font-semibold'>{`${product.price} kr`}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
