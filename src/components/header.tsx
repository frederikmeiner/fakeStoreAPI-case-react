// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="top-0 fixed w-full z-20 bg-white/25 backdrop-blur shadow-sm pt-4 pb-4">
<div className="max-w-1366  mx-auto flex justify-between items-center px-10">
  <h2 className="text-xl font-bold text-black">
    <Link to="/" className="hover:text-gray-800 playfair-display">Fake store API</Link>
  </h2>
  <nav>
    <ul className="flex space-x-4">
      <li>
        <Link to="/" className="text-black Montserrat font-semibold hover:text-gray-800 ">Home</Link>
      </li>
      <li>
        <Link to="/about" className="text-black Montserrat font-semibold hover:text-gray-800">About</Link>
      </li>
      <li>
        <Link to="/contact" className="text-black Montserrat font-semibold hover:text-gray-800">Contact</Link>
      </li>
    </ul>
  </nav>
</div>
</header>
  );
}
