import React from 'react'

function About() {
  return (
    <div className='about container'>
    <div className="row">
    <h1 id="title" className='mx-auto mt-5'>About Us</h1>
    </div>
   <div className="img">
    <img src="https://www.motocms.com/blog/wp-content/uploads/2017/11/about-us-page-concept-illustrati-1.jpg" alt="about-img" width={1000} className="mx-5 mt-5"/>
   </div>
   <div className="about-item-area col-md-12">
<div className="about-text col-md-9">
<span id='line1'></span>
  <h4  id='line-text'>Who are you</h4>
  <p>We as a team BrighinTech, we oversee a dynamic team specializing in Digital marketing, DevOps, Cloud solutions, Web development, and App development. We drive innovation and deliver exceptional results, leveraging our expertise to help businesses thrive in the digital landscape.</p>
</div>
<div className="about-text col-md-12">
<span id='line2'></span>
  <h4 id='line-text'>Core Values</h4>
  <h1>INTEGRITY</h1>
  <p>To be fair, transparent, and ethical in our conduct with all our stakeholders
</p>
 <h1>INNOVATION</h1>
  <p>Commitment to innovation that ensures sustainable growth for the entire digital ecosystem
</p>
 <h1>EMPOWERMENT OF PEOPLE</h1>
  <p>A work environment that empowers people to transform challenges into opportunities
</p>
 <h1>EMBRACING DIVERSITY</h1>
  <p>Embraces cultural diversity to enrich individuals and unlock their creativity
</p>
 <h1>COMMITMENT TO SUSTAINABILITY</h1>
  <p>Commitment to a sustainable digital ecosystem that benefits all
</p>
 <h1>SHARED & ENDURING PROSPERITY FOR ALL</h1>
  <p>Ensuring enduring prosperity for all, through shared knowledge, value-creating relationships, and sustainable growth
</p>
</div>
<div className="about-text col-md-12">
<h4  id='line-text'>Our Beliefs</h4>
<h2>Shared prosperity is invaluable for sustainable business</h2>
<h1>People Power</h1>
  <p>People come with skills, experiences, and insights that help redefine possibilities, thereby delivering innovative solutions.
</p>
 <h1>People are Talented</h1>
  <p>
Given the opportunity, people will achieve excellence in their areas of talent.
</p>
 <h1>
We are Committed to 
</h1>
  <ul>
    <li>
    Achieving an optimum balance between growth targets and profit margins
    </li>
    <li>
    Accelerating the advancement of in-house expertise to keep up with technological upgrades
    </li>
    <li>
    Actively contributing to the well-being of communities at large
    </li>
  </ul>
</div>
<div className="about-text col-md-12"></div>
<div className="about-last-img">
  <img src="https://www.brightintech.com/wp-content/uploads/2023/05/undraw_building_websites_i78t-300x221.png" alt="about-last-img" />
</div>
   </div>
    </div>
  )
}

export default About