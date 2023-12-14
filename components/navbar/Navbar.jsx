import React from 'react'
import Image from 'next/image'
import logo from "@/public/images/izel.png";
import logo_icon from "@/public/images/icon.png"
import "./navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left_container'>
        <div className="logo">
            <Image src={logo} alt='izel_logo' width={200} height={150} style={{objectFit : "contain"}}/>
        </div>
        <div className="logo_icon">
            <Image src={logo_icon} alt='izel_logo' width={100} height={80} style={{objectFit : "contain"}}/>
        </div>
        {/* <div className="nav_links">
            <div className="nav_links_container">
                <div className="nav_link_container">
                    <p>Home</p>
                </div>
                <div className="nav_link_container">
                    <p>About</p>
                </div>
                <div className="nav_link_container">
                    <p>Services</p>
                </div>
                <div className="nav_link_container">
                    <p>Testimonials</p>
                </div>
                <div className="nav_link_container">
                    <p>Contact</p>
                </div>
            </div>
        </div> */}
        </div>
        {/* schedule a call  */}
        {/* <div className="sechedule">
            <div className="schedule_btn">
                <span>Schedule a call</span>
            </div>
        </div> */}
    </div>
  )
}

export default Navbar