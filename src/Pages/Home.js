import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'
import img from '../Assets/img.png'

const Home = () => {
  return (
    <>
      <div className="container mt-5 mb-5 home">
        <div className="row">
          <div className="col-md-6 mb-5">
            <img src={img} alt="" width={500} className="img-fluid" />
          </div>
          <div className="col-md-6">

            <h4>GET EXPERIENCE WITH US</h4>
            <h1 >Your Idea, Our Innovation
              Together We Build
            </h1>
            <p>Empower your business to reach new heights with
              BrightInTech, We provide cutting-edge technologies and
              strategic insights.
            </p>

            <Link to="/contact">
              <button className='btn btn-primary px-4'>Get Started</button>
            </Link>

            <Link>
              <button className='btn btn-outline-primary px-4'>Learn More</button>
            </Link>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-md-3 card_1 ">
            <i className="fab fa-codepen"></i>
            <h1>Easily Customizable</h1>
            <hr />
            <p>Tailor your website to your liking with endless options to personalize the design and functionality.</p>
          </div>
          <div className="col-md-3 card_1 " > <i className="fab fa-buffer"></i>
            <h1>SEO Optimized</h1>
            <hr />
            <p>Built with search engines in mind, achieve higher rankings and more traffic with optimized code.</p></div>
          <div className="col-md-3 card_1 ">
            <i className="fab fa-blackberry"></i>
            <h1>Blazing Fast</h1>
            <hr />
            <p>Experience lightning-fast page load speeds for optimal user experience and SEO ranking</p>
          </div>
        </div>
      </div>



      <div className="container expertise">
        <div className="row">
          <div className="col-md-12 text-center mb-5 expertise-text">
            <h1>Our expertise are in</h1>
            <p>Success in business is not about waiting for opportunities to come; its about creating them.
            </p>
          </div>

          <img src="https://www.brightintech.com/wp-content/themes/spectra-one/assets/image/content-1.png" alt="img1" width={600} className="col-md-6" />
          <div className="col-md-6">
            <p>01</p>
            <h1>Digital Marketing</h1>
            <p>Our company pioneers effective digital marketing solutions that boost brand visibility, drive targeted traffic, and generate measurable results. With our strategic approach and cutting-edge techniques, we empower businesses to thrive in the ever-evolving digital landscape.

              Learn More About What we actually do…</p>
            <Link to="/digitalMarketing" className='btn btn-outline-info'>Learn More</Link>
          </div>

          <span></span>
          <div className="col-md-6 mb-5">
            <p>02</p>
            <h1>Application Development</h1>
            <p>I am proud to introduce our team of skilled professionals who are passionate about creating exceptional mobile applications. We specialize in designing and developing cutting-edge apps that deliver seamless experiences across iOS and Android platforms. Let us bring your app ideas to life and drive your business forward in the digital age.</p>
            <Link to="/appDevelopment" className='btn btn-outline-info'>Learn More</Link>
          </div>
          <img src="https://www.brightintech.com/wp-content/themes/spectra-one/assets/image/content-2.png" alt="img1" width={600} className="col-md-6" />
          <span></span>

          <img src="https://www.brightintech.com/wp-content/themes/spectra-one/assets/image/content-3.png" alt="img1" width={600} className="col-md-6" />

          <div className="col-md-6">
            <p>03</p>
            <h1>Web Development</h1>
            <p>Our web development company specializes in creating innovative and dynamic websites that engage users and drive business growth. With our expertise, we deliver customized solutions that exceed client expectations and establish a strong online presence.</p>
            <Link to="/webDevelopment" className='btn btn-outline-info'>Learn More</Link>
          </div>
          <span></span>
          <div className="col-md-6">
            <p>04</p>
            <h1>Cloud & DevOps</h1>
            <p>Our company specializes in cloud and DevOps solutions, enabling businesses to leverage the power of scalable infrastructure and streamlined development processes. With our expertise, we empower organizations to accelerate deployment, optimize efficiency, and unlock the full potential of cloud computing.</p>
            <Link to="/devOps" className='btn btn-outline-info'>Learn More</Link>
          </div>
          <img src="https://www.brightintech.com/wp-content/themes/spectra-one/assets/image/content-1.png" alt="img1" width={600} className="col-md-6" />
        </div>
      </div>




      {/*  Asked Questions */}
      <div className="askedQuestion container">
        <div className="row" >
          <h1 className='ask-text text-center col-md-12'>Frequently Asked Questions</h1>
          <div className="asked-text col-md-12">
            <h2 className="h2">What is Full Site Editing?</h2>
            <p>Full Site Editing (FSE) is a feature in WordPress that allows users to visually design and customize their entire website, including the header, footer, and other template parts.</p>
            <hr />
          </div>
          <div className="asked-text col-md-12">
            <h2 className="h2">What are some benefits of using Full Site Editing</h2>
            <p>Full Site Editing provides a more user-friendly, streamlined approach to website design and customization. It allows users to see changes in real-time, provides more control over design elements, and enables developers to create more custom blocks and templates.</p>
            <hr />

          </div>
          <div className="asked-text col-md-12">
            <h2 className="h2">Do I need to know how to code to use Full Site Editing</h2>
            <p>No, Full Site Editing does not require knowledge of coding or web development. The drag-and-drop interface and pre-designed templates make it easy for users to create a professional-looking website without any coding experience. </p>
          </div>
        </div>
      </div>
<hr />

      <div className="container-fluid 
Build-web">
        <div className="row">
          <div className="col-md-12">
            <h1>
              Build your own website</h1>
          <p>Take your website to the next level!</p>
          <Link  to="/contact">
          <Button className='btn btn-outline-info'>Get Started</Button>
          </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home;