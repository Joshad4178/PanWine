import React from 'react'
// import { Link } from 'react-router-dom';
import './product.css'
import Dolceto from'./proimages/Dolceto.jpg'
import merlot from'./proimages/merlot.jpg'
import yerling from'./proimages/yerling.jpg'
import pinot from'./proimages/pinot.jpg'
import sauvig from'./proimages/sauvig.jpg'
import veuve from'./proimages/veuve.jpg'
import amarone from'./proimages/amarone.jpg'
import vina from'./proimages/vina.jpg'
import nebla from'./proimages/nebla.jpg'
import canalet from'./proimages/canalet.jpg'
import clearspring from'./proimages/clearspring.jpg'
// import vina from'./proimages/vina.jpg'

export default function Products() {
  return (
    <div>
        <div className='productss'>
            <div className='paret'>
                <div className='productcontainer'>
                    <img className='productimage' src={Dolceto} alt='D for Doc'/>
                    <p className='productname'>Dolceto</p>
                    <p className='price'>#12,400</p>
                    <button className='Addtocart'>Add to Cart</button>
                </div>
                <div className='productcontainer'>
                    <img className='productimage' src={merlot} alt='D for Doc'/>
                    <p className='productname'>Merlot Clearsprings</p>
                    <p className='price'>#12,400</p>
                    <button className='Addtocart'>Add to Cart</button>
                </div>
                <div className='productcontainer'>
                    <img className='productimage' src={yerling} alt='D for Doc'/>
                    <p className='productname'>yerling</p>
                    <p className='price'>#12,400</p>
                    <button className='Addtocart'>Add to Cart</button>
                </div>
            </div>

            <div className='paret'>
                <div className='productcontainer'>
                    <img className='productimage' src={pinot} alt='D for Doc'/>
                    <p className='productname'>Pinot Noir: Aymura</p>
                    <p className='price'>#12,400</p>
                    <button className='Addtocart'>Add to Cart</button>
                </div>
                <div className='productcontainer'>
                    <img className='productimage' src={sauvig} alt='D for Doc'/>
                    <p className='productname'>Sauvignon Blanc</p>
                    <p className='price'>#12,400</p>
                    <button className='Addtocart'>Add to Cart</button>
                </div>
                <div className='productcontainer'>
                    <img className='productimage' src={veuve} alt='D for Doc'/>
                    <p className='productname'>Veuve Cliquot</p>
                    <p className='price'>#12,400</p>
                    <button className='Addtocart'>Add to Cart</button>
                </div>
            </div>

            <div className='paret'>
                <div className='productcontainer'>
                    <img className='productimage' src={amarone} alt='D for Doc'/>
                    <p className='productname'>Amarone</p>
                    <p className='price'>#12,400</p>
                    <button className='Addtocart'>Add to Cart</button>
                </div>
                <div className='productcontainer'>
                    <img className='productimage' src={vina} alt='D for Doc'/>
                    <p className='productname'>Vina Ardanza</p>
                    <p className='price'>#12,400</p>
                    <button className='Addtocart'>Add to Cart</button>
                </div>
                <div className='productcontainer'>
                    <img className='productimage' src={nebla} alt='D for Doc'/>
                    <p className='productname'>Nebla</p>
                    <p className='price'>#12,400</p>
                    <button className='Addtocart'>Add to Cart</button>
                </div>
            </div>

            <div className='paret'>
                <div className='productcontainer'>
                    <img className='productimage' src={canalet} alt='D for Doc'/>
                    <p className='productname'>Canaletto</p>
                    <p className='price'>#12,400</p>
                    <button className='Addtocart'>Add to Cart</button>
                </div>
                <div className='productcontainer'>
                    <img className='productimage' src={clearspring} alt='D for Doc'/>
                    <p className='productname'>Clearsprings</p>
                    <p className='price'>#12,400</p>
                    <button className='Addtocart'>Add to Cart</button>
                </div>
                <div className='productcontainer'>
                    <img className='productimage' src={yerling} alt='D for Doc'/>
                    <p className='productname'>Yering</p>
                    <p className='price'>#12,400</p>
                    <button className='Addtocart'>Add to Cart</button>
                </div>
            </div>
        </div>
        <div className='links'>
            <a className='linkmore' href='more'>View-More</a>
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 17L9 9L1 0.999998" fill="#411530" fill-opacity="0.6"/>
                <path d="M1 17L9 9L1 0.999998" stroke="#4169E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
        </div>
    </div>
  )
}