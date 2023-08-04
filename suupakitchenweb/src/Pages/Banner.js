import React from 'react';
import '../css/Banner.css';
import logo1 from '../img/logo1.jfif';
import { useLocation } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner">

            <img src={logo1} width={300} height={200} />
            {/* <p>立志于做好每一份不愧于良心的月子餐！</p> */}
        
            <div className="right">
                <p> here </p>
            </div>
           

        </div>
    );
};

export default Banner;