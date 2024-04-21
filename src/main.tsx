// src/main.tsx or wherever you set up your router
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css';
import Layout from './components/layout';
import App from './App';
import SingleProduct from './pages/singleProduct';
import About from './pages/about';
import Contact from './pages/contact';
import Page404 from './pages/page404'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><App /></Layout>,
  },
  {
    path: '/products/:id',
    element: <Layout><SingleProduct /></Layout>,
  },
  {
    path: '/about',
    element: <Layout><About /></Layout>,
  },
  {
    path: '/contact',
    element: <Layout><Contact/></Layout>,
  },
  {
    path: '/products',
    element: <Navigate to="/" replace />,
  },
  {
    path: '*', 
    element: <Layout><Page404 /></Layout>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
