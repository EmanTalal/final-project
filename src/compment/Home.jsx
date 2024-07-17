import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import Cards from '../compment/Cards';
import Login from '../compment/Login';
import Singup from '../compment/Singup';

import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
        <heder>
            <a href='#' className='logo'>
                <img src='dee.png' ></img>  </a>
            <div className='bx bx-menu' id='menu-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
            </div>
            <ul className='navbar'>
                <li><a href='#Contact Us' >Destination</a></li>
                <li><a href='#Destination' className='loging' style={{color:'white'}}>Login</a></li>
                <li><a href='#Destination' className='loging' style={{color:'white'}}>SignUp</a></li>

            </ul>
        </heder>
        
        {/* Home Section */}
        <section className='home' id='home'>
        {/* <video className='video-bg' src="IMG_7098.MP4" autoPlay loop muted></video> */}


            
            <div className='home-text'>
                <h1>Your Personal AI Travel Planner</h1>
                <br></br>
                <center>
                    <Link to="Login">
                <button className='home-btn'>Get Start!</button>
                </Link>
                </center>
            </div>
             </section>
             <Cards></Cards>

      </div>
  )
}

export default Home
