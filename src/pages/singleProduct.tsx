import{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SizeSelector, firstLetter } from '../helperFunction';
import RelatedProduct from '../components/relatedProduct';

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
}

function SingleProduct() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Failed to fetch product:", err));
  }, [id]);

  if (!product) return <p className='max-w-1366 mx-auto flex flex-col md:flex-row px-10 pt-32 pb-16'>Loading product details...</p>;

  return (
    <>
    <div className="max-w-1366 mx-auto pt-20 px-10 flex gap-2">
    <a className="font-semibold"href="/">Home</a>
        <p>/</p>
        <p className=''>{product.title}</p>
      </div>
    <section className="max-w-1366 mx-auto flex flex-col md:flex-row px-10 pt-32 pb-16">
      <div className="w-full md:w-1/2">
        <div className="relative h-auto overflow-hidden max-h-[400px] md:max-h-[700px] shadow-md">
          <img src={product.image} alt={product.title} className="object-cover w-full h-full"/>
          <span className="absolute top-0 right-0 bg-gray-50 text-gray-800 text-sm font-bold px-3 py-1 m-2 rounded-full border-0 border-solid border-gray-300 shadow-sm">
            {firstLetter(product.category)}
          </span>
        </div>
      </div>
      <div className="flex-grow md:w-1/12"></div>
      <div className="w-full md:w-5/12 text-left mt-4 md:mt-0 px-4 md:px-0">
        <h1 className="font-bold text-3xl md:text-4xl py-4">{product.title}</h1>
        <p className="text-gray-900 font-semibold text-xl md:text-2xl py-4">
          {`${product.price} kr `}
          <span className="text-gray-600 text-xs">inkl. moms</span>
        </p>
        <p className="text-gray-700 py-4">{product.description}</p>
        <SizeSelector />
        <button
          className="w-full bg-black text-white font-semibold py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50 mt-4"
        >
          Buy now
        </button>
      </div>
    </section>
    {product.category && <RelatedProduct currentCategory={product.category} />}
  </>
  );
}

export default SingleProduct;
