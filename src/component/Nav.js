
import { useState } from "react"
import { Link } from "react-router-dom";
import logo from '../Assets/brightintech-logo.png'

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <div className="container-fluid">
      {/* <!-- Navigation --> */}
      <nav className="navigation col-md-11 mt-4 ">
      <Link to="/" className="brand-name a">
        <img src={logo} alt="logo" className="mx-5  " />
      </Link> 
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
     <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul className="col-md-12 align-items-center bg-black">
          <li>
            <Link to="/" className="nav-item">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">About us</Link>
          </li>

          <li>
            <Link to="/services" className="nav-item">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-item">Contact Us</Link>
          </li>

          <li>
          <Link>
          <button className="btn btn-primary mt-3 px-lg-5">Get Start</button>
          </Link>
         
          </li>
        </ul>
      </div>
    </nav>
    </div>
    
  );
}