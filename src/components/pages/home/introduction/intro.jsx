import React from 'react'
import './intro.css'
import { Link } from 'react-router-dom'
export default function Intro() {
  return (
    <div>
        <div className='intro'>
          <div className='para1'>
            <p>Tastefulness & Elegance <br/>of a Best Wine</p>
          </div>
          <div className='para2'>
            <p>Browse our collection to find that delectable taste you desire</p>
          </div>
          <div className='para4'>
            <button className='parab'><Link to={"./productpage"} className='link1'>Explore Products</Link></button>
          </div>

        </div>
    </div>
  )
}
