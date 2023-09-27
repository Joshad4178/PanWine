// import logo from './logo.svg';
import './App.css';import { Outlet } from 'react-router-dom';
// import Navbar from './components/router/pages/Nav/nav'
// import Intro from './components/pages/home/introduction/intro'
// import MyForm from './components/pages/home/Forms/forms';
// import Products from './components/pages/home/products/product';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Intro/>
      <MyForm/>
      <h2>Product</h2>
      <Products/> */}
      <Outlet/>
    </div>
  );
}

export default App;
