import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
      <>
      <nav>
      <ul>
         <li className="logo">
<i className="fa fa-home"></i>
         <Link to="/" style={{text-decoration: "inherent"}}>Home</Link>
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
