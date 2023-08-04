import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from '../Banner/Banner';
import Company from '../Company/Company';
import JobFeatured from '../JobFeatured/JobFeatured';
import JobOption from '../JobOption/JobOption';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    
    return (
        <div>
            <Banner/>
            <div data-aos="zoom-in" data-aos-delay="100"><Company/></div>
            <JobFeatured/>
            <JobOption/>
        </div>
    );
};

export default Home;