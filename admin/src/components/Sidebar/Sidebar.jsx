import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/admin_assets/assets'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <div className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </div>
            <div className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>List Itmes</p>
            </div>
            <div className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>Orders Items</p>
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar