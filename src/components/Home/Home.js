import React from 'react';
import HomeBackground from '../HomeBackground/HomeBackground';
import './Home.css'
import NavBar from '../NavBar/NavBar';
import TravelOption from './TravelOption/TravelOption';
const Home = () => {
    return (
        
            <div className="header">
                <HomeBackground></HomeBackground>
                <NavBar></NavBar>
               <TravelOption></TravelOption>
            </div>
    );
};

export default Home;





