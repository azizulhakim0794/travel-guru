import React from 'react';
import './NavbarBlack.css'
import { Link, Route } from 'react-router-dom';
import logo from '../../images/Logo.png';
const NavbarBlack = () => {
    return (
        <div>
                        <nav class="navbar navbar-expand-lg navbar-light bg-none header-navbar">
                        <a class="navbar-brand" id="navBrand"><img class="logoo"src={logo} alt=""/></a>
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
                        
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-black" id ='black' to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link text-black"  to="/booking">Booking</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link text-black"  to="/destination">Destination</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link text-black"  to="/contact">Contact</Link>
                            </li>
                             <button id="login" class="btn btn-warning my-2 my-sm-0" type="submit"><Link class="text-white" to="/login">Login</Link></button>
                            </ul>
                            
                            </div>
                        </div>
              </nav>
        </div>
    );
};

export default NavbarBlack;