import React from 'react'

const PlanPricing = () => {
  return (
   <>
    <div className="container">
        <div className="row">
            <div className="titlePlans col-md-12 text-center">
                <h1>Premium Plan</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quibusdam veritatis sequi minus, nulla laudantium accusamus commodi laborum inventore voluptatum, facere libero expedita iste? Dolor voluptatum beatae itaque aliquid harum.</p>
            </div>

            <div className="card col-md-3" id="cards">
                <h1>Start Free</h1>
                <h2>$00</h2>
                <p>One User</p>
                <p>1 Project</p>
                <button className='btn btn-primary ' >Order</button>
            </div>
            <div className="card col-md-3" id="cards">
                <h1>Basic</h1>
                <h2>$454</h2>
                <p>One User</p>
                <p>1 Project</p>
                <button className='btn btn-primary'>Order</button>
            </div>
            <div className="card col-md-3" id="cards">
                <h1>Expert</h1>
                <h2>$123.55</h2>
                <p>One User</p>
                <p>1 Project</p>
                <button className='btn btn-primary'>Order</button>
            </div>
        </div>
    </div>
   </>
  )
}

export default PlanPricing