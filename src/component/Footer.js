import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/brightintech-logo.png'


const Footer = () => {
  return (
    <>
    <hr />
    <div className="container footer">
      <div className="row">
       <div className="col-md-4">
       <Link to="/">
             <img src={logo} alt="footer-logo" width={200}/>
             </Link>
             <h1>Development Center</h1>
              <p>BRIGHT IN TECHNOLOGY</p>
              <p>Shrirampur, Ahmednagar, <br />
               Maharashtra, 413709 <br />
                +91-7709-415521 <br />
                +91-8432-930406</p>
                <a href="" target="_blank" className="social-links" data-toggle="tooltip" data-placement="left" title='Linkedin'>
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="social-links" target="_blank" data-toggle="tooltip" data-placement="left" title='Instagram'>
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#" className="social-links" target="_blank" data-toggle="tooltip" data-placement="left" title='facebook'>
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a href="#" className="social-links" target="_blank" data-toggle="tooltip" data-placement="left" title='Github'>
                <i className="fa-brands fa-github"></i>
              </a>

              <a href="#" className="social-links" target="_blank" data-toggle="tooltip" data-placement="left" title='Email'>
                <i className=" fas fa-envelope"></i>
              </a>
              <hr />
       </div>
       <div className="col-md-4">
       <ul>
                <li><a href="" className='item'>Product List</a></li>
                <li><a href="" className='item'>Plan & Pricing</a></li>
                <li><Link to="/services" className='item'>Services</Link></li>
                <li><a href="" className='item'>Partners</a></li>
              </ul>
              <hr />
       </div>
       <div className="col-md-4">
       <ul>
                <li><Link to="/" className='item'>Home</Link></li>
                <li><a href="#" className='item'>Career</a></li>
                <li><Link to="/contact" className='item'>Contact us</Link></li>
                <li><a href="#" className='item'>Meet Our Team</a></li>
              </ul>
       </div>
       <div className="col-md-12 text-center">
    copyright © 2023 - All Rights Reserved
    </div>
      </div>
    </div>

    
    </>
      
   
  )
}

export default Footer