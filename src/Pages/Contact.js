import React from 'react'
import {Button} from 'react-bootstrap'
function Contact() {
  return (
  <>
  <div className="container">
  <div className="row">
  <h1 id='title' className='mx-auto mt-5 mb-4'>Contact US</h1>
  <div className="col-md-12">
    <form>
    <p className='text col-md-6'>Fields marked with an <span>*</span> are required</p>
      <label >Name  </label>
      <span className='star'>*</span>
      <input type="text" name="name" placeholder='Enter Your Name' className='form-control' required/>
<br />
      <label>Email </label>
      <span className='star'>*</span>
      <input type="text" name="message" placeholder='Enter Your Email' className='form-control' required/>

      <label className='mt-4'>Message  </label>
      <span className='star'>*</span>
      <textarea  rows="9" cols="50" type="text" name="message" placeholder='Enter Your Message' className='form-control' required ></textarea>
<br />
      <Button className='btn btn-info px-5'>Send</Button>
    </form>
    </div>
  </div>
  </div>
   
  </>
  )
}

export default Contact