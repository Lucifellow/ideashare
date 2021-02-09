import React from 'react';
import "./style/Navbar.css"
import logo_img from "./assets/ideashare.png";
import search from "./assets/search.svg";
import lightbulb from "./assets/lightbulb.svg";
import darkmode from "./assets/dark_mode.svg";
import help from "./assets/help.svg";
import newpage from "./assets/new_page.svg";
import login from "./assets/login.svg"

const Navbar = ()=>{
   return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid ">
     
      <a className="navbar-brand" href ="/">
      <div className="brand_flex">
        <div className="image_size">
          <img src={logo_img} alt ="image logo"/>
        </div>
        <div className="font_website_name">
        <h3>
          ideashare
        </h3>
      </div>
      </div>
      </a>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <form className="d-flex">
              <input className="form-control me-2 margin_left_search highlight padding_input_search" type="search" placeholder="Search Ideas" aria-label="Search" />
              <button className="btn btn-outline-success image_hover_invert_color" type="submit">
                  <img src={search} alt="Search button"/>
              </button>
            </form>
          </li>
        </ul>
        <button className="btn btn-outline-primary margin_login button_shape" >
            Log In
          </button>
        <button className="btn btn-primary margin_sign_up button_shape">
            Sign Up
        </button>
        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={lightbulb} alt="Dropdown" />
        </a>
        <ul className="dropdown-menu right_drop_down" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="/">
                  <img src={help} alt="Help Center" />
                  <span>Help Center</span> 
                  <img src={newpage} className="new_link_logo" alt="Open in New Page" />
                </a>
              </li>
              <li>
                <div className=" dropdown-item d-flex">
                  <img src={darkmode} alt="Dark Mode" /> 
                  <span>Night Mode</span> 
                  <div className="form-check form-switch left-margin-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  </div>
                </div>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  <img src ={login} alt="Log In or Sign Up"/>
                  <span>Log In / Sign Up</span>
                </a>
              </li>
          </ul>
          
      </div>
    </div>
  </nav>
    );
}

export default Navbar;
