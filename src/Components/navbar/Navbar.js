import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"

export const Navbar=()=> {
  return <div className='header'>
 <FontAwesomeIcon icon={faBars} className='fabar fa-2x'/>
 
  </div>;
}
