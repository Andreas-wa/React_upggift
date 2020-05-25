import React from "react";
import {Link} from "react-router-dom";
import "./styles/_navbar.scss";

const Navbar = ()=>{

  return(
    <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
      <Link className={"navbar-brand"} to="/">Nvbar</Link>
  {/* <button className={"navbar-toggler"} type={"button"} >
    <span className={"navbar-toggler-icon"}></span>
  </button> */}
      <div className={"collapse navbar-collapse"} id={"navbarNavAltMarkup"}>
      <div className={"navbar-nav"}>
      <Link className={"nav-item-home active"} style={{textDecoration: 'none'}} to="/">Home</Link>
      <Link className={"nav-item-book"} style={{textDecoration: 'none'}} to="/bookings">Booking</Link>
      {/* <Link className={"nav-item-feat"} style={{textDecoration: 'none'}} to="/card">Features</Link> */}
      <Link className= {"nav-item-form"} style={{textDecoration: 'none'}} to="/Form">Form</Link>
      {/* <Link className={"nav-item-Alogin"} style={{textDecoration: 'none'}} to="/adminLogin">AdminLogin</Link> */}
      <Link className={"nav-item-contact"} style={{textDecoration: 'none'}} to="/Contact">Kontakt</Link>
      <Link className={"nav-item-Ulogin"} style={{textDecoration: 'none'}} to="/UserSida">login</Link>
    </div>
  </div>
</nav>
    )
}

export default Navbar;