import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
      <>
      <nav>
      <ul>
         <li className="logo">
<i className="fa fa-home">
         <Link to="/">Home</Link>
         </li>
         <li className="about">
         <Link to="/about">About</Link>
         </li>
                                                                                              
                                                                                                     
                                                                                   
         </ul>
         </nav>

         <Outlet />
         </>
         )
         };
export default Layout;                                                                                        
