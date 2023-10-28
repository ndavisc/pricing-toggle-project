import React from 'react'
import './PlanOptions.css'


const PlanOptions = ({planType, description, price, coreFeatures, installationFeatures, supportFeatures, nextPlan}) => {
  
  return (
    <div className='options'>
      <div className='profile-circle'></div>
    <h1>{planType}</h1>
    <h2>{description}</h2>
    <h3>{price} per month </h3>
    <button>Choose {planType}</button>
    <div classname='small-circle'></div>
    <br></br>
    <h4 >Core Features: {coreFeatures}</h4>
    <br></br>
    <h4> Installation Features: {installationFeatures}</h4>
    <br></br>
    <h4> Support Features: {supportFeatures}</h4>
    

    </div>
  )
}

export default PlanOptions;