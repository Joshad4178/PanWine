// import logo from './logo.svg';
import React from 'react'
// import { Link } from 'react-router-dom'
import './productpage.css';
import Navbar from './Nav/navp';
import Sortby from './sortby';
import Producs from '../home/products/productpages';
// import Products from './products/product';
// import Footer from './footer/footer';

function Productpage() {
  return (
    <div className="Productpage">
      <Navbar/>
      <div className='headd'>
        <div>
          <p className='result'>Result Found</p>
        </div>
        <div className='pray'>
          <p className='sort'>Sort By</p> 
          <div className='pack'>
            <Sortby/>
            </div>
        </div>
      </div>
      <Producs/>
    </div>
  );
}

export default Productpage;
