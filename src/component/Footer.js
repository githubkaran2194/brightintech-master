import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/brightintech-logo.png'


const Footer = () => {
  return (
    <footer className='container footer'>
      <div className="row">
        <div className="container-fluid col-md-12 d-flex justify-content-between">
          <div className="footer-flex col-xl-5 col-md-5 col-sm-6">
            <div className="logo">
             <Link to="/">
             <img src={logo} alt="footer-logo" />
             </Link>
            </div>
            <div className="footer-text">
              <h1>Development Center</h1>
              <p>BRIGHT IN TECHNOLOGY</p>
              <p>Shrirampur, Ahmednagar, <br />
               Maharashtra, 413709 <br />
                +91-7709-415521 <br />
                +91-8432-930406</p>
            <div className="social-icons">
            <a href="https://www.linkedin.com/in/karan-chavan2194" target="_blank" className="social-links" data-toggle="tooltip" data-placement="left" title='Linkedin'>
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
             

            </div>
            </div>
          </div>
          <div className="footer-flex col-xl-5 col-md-5 col-sm-6">
            <div className="footer-product-list">
              <ul>
                <li><a href="" className='item'>Product List</a></li>
                <li><a href="" className='item'>Plan & Pricing</a></li>
                <li><a href="" className='item'>Services</a></li>
                <li><a href="" className='item'>Partners</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-flex col-xl-5 col-md-4 col-sm-6">
            <div className="resource ">
              <ul>
                <li><Link to="/" className='item'>Home</Link></li>
                <li><a href="#" className='item'>Career</a></li>
                <li><Link to="/contact" className='item'>Contact us</Link></li>
                <li><a href="#" className='item'>Meet Our Team</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer