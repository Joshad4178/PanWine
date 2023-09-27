import React from 'react'
// import { Link } from 'react-router-dom';
import './product.css'
// import Dolceto from'./proimages/Dolceto.jpg'
// import merlot from'./proimages/merlot.jpg'
// import yerling from'./proimages/yerling.jpg'
import pinot from'./proimages/pinot.jpg'
import sauvig from'./proimages/sauvig.jpg'
import veuve from'./proimages/veuve.jpg'
import amarone from'./proimages/amarone.jpg'
import vina from'./proimages/vina.jpg'
import nebla from'./proimages/nebla.jpg'
// import canalet from'./proimages/canalet.jpg'
// import clearspring from'./proimages/clearspring.jpg'
// import vina from'./proimages/vina.jpg'

export default function Products() {
  return (
    <div>
        <div className='productss'>
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

            
        </div>
        
    </div>
  )
}