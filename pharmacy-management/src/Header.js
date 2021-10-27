import React from 'react'
import './Header.css'


function Header() {
    return (
        <div className='header'>
                <nav>
            <div class="menu-icon">
               <span class="fas fa-bars"></span>
            </div>
            <div class="logo">
               Pharmacy Management
            </div>
            <div class="nav-items">
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Blogs</a></li>
               <li><a href="#">Contact</a></li>
               <li><a href="#">Feedback</a></li>
            </div>
            <div class="search-icon">
               <span class="fas fa-search"></span>
            </div>
            <div class="cancel-icon">
               <span class="fas fa-times"></span>
            </div>
            <form action="#">
               <input type="search" class="search-data" placeholder="Search" required />
               <button type="submit" class="fas fa-search"></button>
            </form>
         </nav>
             
        </div>
    )
}

export default Header
