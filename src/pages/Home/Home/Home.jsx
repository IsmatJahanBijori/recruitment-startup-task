import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from '../Banner/Banner';
const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms (1 second)
    }, []);
    //data-aos="zoom-in"
    //data-aos-delay="100"
    return (
        <div>
            <Banner />
        </div>
    );
};

export default Home;