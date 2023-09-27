// import logo from './logo.svg';
import React from 'react'
import { Link } from 'react-router-dom'
import './home.css';
import Navbar from './Nav/nav'
import Intro from './introduction/intro'
import MyForm from './Forms/forms';
import Products from './products/product';
import Footer from './footer/footer';
// import Productpage from "../productpage/productpage"

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <MyForm/>
      <h2><Link to={"./productpage"} className='linkp'>product</Link></h2>
      <Products/>
      <Footer/>      
    </div>
  );
}

export default Home;
