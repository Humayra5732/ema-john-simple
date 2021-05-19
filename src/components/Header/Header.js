import React from 'react';
import logo from '../../images/logo.png';
// using '../' means going to the previous folder 
import './Header.css'; 
// using './' means using from same folder 


const Header = () => {
    return (
        <div className ="header">
           <img src={logo} alt=""/>  
           {/* the images source should be the name using which we imported */}
           <nav>
               <a href="/shop">Shop</a>
               <a href="/review">Order Review</a>
               <a href="/manage">Manage Inventory</a>
               </nav>
        </div>
    );
};

export default Header;