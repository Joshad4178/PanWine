import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='foot1'>
            <div className='footlogo'>
                <h1 className='ftlogo'>PanWines</h1>
            </div>
        
            <div className='footpara'>
                <p className='ftpara'>Get the Tastefulness & <br/>
                Elegance of a Best Wine</p>
            </div>
        </div>
        <div className='foot2'>
            <div className='fooabout'>
                <div className='Homepg'>
                    
                    <ul>
                        <li><h3>Homepage</h3></li>
                        <li>Home</li>
                        <li>Authentiction</li>
                        <li>Product</li>
                        <li>Shoping</li>
                    </ul>  
                </div>
                <div className='contactpg'>
                    
                    <ul>
                        <li><h3>Contact us</h3></li>
                        <li>Panwine@gmail.com</li>
                        <li>www.panwine.com</li>
                        <li>+23480808080</li>
                        
                    </ul>  
                </div>
               
            </div>
        
            <div className='footpara2'>
            <button className='footbtn'><p className='btnn'><Link to={"./productpage"} className='link1'>Explore Products</Link></p></button>
            </div>
        </div>
    </div>
  )
}
