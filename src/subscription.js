import React, { useState } from 'react'
import './subscription.css'
import clock from './img/clock.svg'
import razor from './img/Razorpay Icon.svg'

const Subscription = () => {
  const plans = [
    {
      id: 1,
      name: '12 Months Subscription',
      total: 99,
      permonth: 8,
    },
    {
      id: 2,
      name: '12 Months Subscription',
      total: 179,
      permonth: 15,
    },
    {
      id: 3,
      name: '6 Months Subscription',
      total: 149,
      permonth: 25,
    },
    { id: 4, name: '3 Months Subscription', total: 99, permonth: 33 },
  ]

  const [selectedPlanId, setSelectedPlanId] = useState(null)
  const [totalAmount, setTotalAmount] = useState(0)

  const handlePlanPrice = (planId) => {
    const selectedPlan = plans.find((plan) => plan.id === planId)
    if (selectedPlan) {
      setSelectedPlanId(planId)
      setTotalAmount(selectedPlan.total)
    }
  }

  return (
    <div>
      <h3>Select Your Subscription Plan</h3>
      <div className='sub_plans'>
        {plans.map((plan) => {
          const isActive = plan.id === selectedPlanId
          const planClass = `sub_plan ${isActive ? 'active' : ''}`

          return (
            <div
              key={plan.id}
              className={planClass}
              onClick={() => handlePlanPrice(plan.id)}
            >
              <div className='sub_plan__left'>
                <h4>{plan.name}</h4>
              </div>
              <div className='sub_plan__right'>
                <p>
                  Total <span className='tot'>&#8377;{plan.total}</span>
                </p>
                <p className='permonth'>
                  &#8377;{plan.permonth}
                  <span className='month'>/mo</span>
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <hr />
      <div>
        <div className='org_sub__fee'>
          <p>Subscription Fee</p>
          <p>
            <span className='amount'>&#8377;18,500</span>
          </p>
        </div>
        <div className='sub_offer'>
          <div className='sub_offer__left'>
            <p className='sub_offer__top'>Limited time offer</p>
            <p className='sub_offer__bottom'>
              <img src={clock} alt={clock} />
              Offer valid till 25th March 2023
            </p>
          </div>
          <div className='sub_offer__right'>
            <span className='amount'>-&#8377;{18500 - totalAmount}</span>
          </div>
        </div>
        <div className='total'>
          <p>
            <span className='total_text'>Total</span>(Incl. of 18% GST)
          </p>
          <p className='total_amount'>&#8377;{totalAmount}</p>
        </div>
        <div className='btn_container'>
          <button className='cancel'>CANCEL</button>
          <button className='pay'>PROCEED TO PAY</button>
        </div>
        <img src={razor} alt='razorpay' />
      </div>
    </div>
  )
}

export default Subscription
