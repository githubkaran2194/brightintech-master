import React from 'react'

function Contact() {
  return (
  <>
  <div className="container-fluid">
  <h1 className='contact-text'>Contact Us</h1>
    <div className="col-md-12">
    <form>
    <p className='text col-md-6'>Fields marked with an <span>*</span> are required</p>
      <label >Name  </label>
      <span>*</span>
      <input type="text" name="name" placeholder='Enter Your Name' className='form-control' required/>
<br />
      <label>Email </label>
      <span>*</span>
      <input type="text" name="message" placeholder='Enter Your Email' className='form-control' required/>

      <label>Message  </label>
      <span>*</span>
      <textarea  rows="9" cols="50" type="text" name="message" placeholder='Enter Your Message' className='form-control' required ></textarea>
<br />
      <button className='btn btn-primary px-5'>Send</button>
    </form>
    </div>
  </div>
  </>
  )
}

export default Contact