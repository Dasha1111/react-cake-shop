import React from 'react';
import "./activity.css";

import { BsArrowRightShort } from "react-icons/bs";
import user1 from "../../../Assets/people6.jpg";
import user2 from "../../../Assets/people3.jpg";
import user3 from "../../../Assets/people4.jpg";
import user4 from "../../../Assets/people2.jpg";
import user5 from "../../../Assets/people1.jpg";

const Activity = () => {
  return (
    <div className="activitySection">

      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt="Customer" />
          <div className="customerDetails">
            <span className='name'>Tatiana Vulkit</span>
            <small>Ordered a cake</small>
          </div>
          <div className="duration">
            2min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="Customer" />
          <div className="customerDetails">
            <span className='name'>Tatiana Vulkit</span>
            <small>Ordered a cake</small>
          </div>
          <div className="duration">
            10min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="Customer" />
          <div className="customerDetails">
            <span className='name'>Tatiana Vulkit</span>
            <small>Ordered a cake</small>
          </div>
          <div className="duration">
            3min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user4} alt="Customer" />
          <div className="customerDetails">
            <span className='name'>Tatiana Vulkit</span>
            <small>Ordered a cake</small>
          </div>
          <div className="duration">
            7min ago
          </div>
        </div>

        <div className="singleCustomer flex">
            <img src={user5} alt="Customer" />
            <div className="customerDetails">
              <span className='name'>Tatiana Vulkit</span>
              <small>Ordered a cake</small>
            </div>
            <div className="duration">
              8min ago
            </div>
          </div>
        </div>
      </div>
  )
}

export default Activity