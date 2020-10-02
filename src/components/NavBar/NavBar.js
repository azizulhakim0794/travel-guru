import React from 'react';
import './NavBar.css'
import logo from '../../images/Logo.png';
import { Link, Router } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-none header-navbar">
                        <a class="navbar-brand" id="navBrand"><img class="logo"src={logo} alt=""/></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2 bg-none " id="input-field" type="search" placeholder="🔎 Search"/>
                        </form>
                            <div class="collapse navbar-collapse justify-content-end">
                                
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 justify-content-end">
                            <li class="nav-item active">
                                {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/booking">Booking</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/destination">Destination</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</Link>
                            </li>
                             <button class="btn btn-warning my-2 my-sm-0" type="submit"><Link class="text-white" to="/login">Login</Link></button>
                            </ul>
                            
                            </div>
                        </div>
              </nav>
        </div>
    );
};
export default NavBar;