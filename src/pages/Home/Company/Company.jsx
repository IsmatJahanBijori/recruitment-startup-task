import React from 'react';
import { Image } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const Company = () => {
    return (
        <Marquee className='my-5 h-50'>
            <Image src="https://i.ibb.co/x1JnQpD/amazon.png" alt="" className='me-3 w-50 rounded' />
            <Image src="https://i.ibb.co/HXNbm3g/google-1-1-1-1.png" alt="" className='me-3' />
            <Image src="https://i.ibb.co/QfzP6jc/apple.png" alt="" className='me-3' />
            <Image src="https://i.ibb.co/zrm1vMv/fb.png" alt="" className='me-3' />
            <Image src="https://i.ibb.co/Wnd7gPf/Group-10021.png" alt="" className='me-3' />
            <Image src="https://i.ibb.co/pQjdy1F/MSFT.jpg" alt="" className='me-3 w-25 rounded' />
            <Image src="https://i.ibb.co/8YYrNHR/netflix-4-1.png" alt="" className='me-3' />
            <Image src="https://i.ibb.co/SQCc8pB/sales.png" alt="" className='me-3 rounded' />
            <Image src="https://i.ibb.co/4T3XwYG/uber.png" alt="" className='me-3 rounded' />
            <Image src="https://i.ibb.co/tKNnPY6/168794.png" alt="" className='me-3 w-25' />
            <Image src="https://i.ibb.co/7rv7ZpX/twit.png" alt="" className='me-3 w-50 rounded' />
            <Image src="https://i.ibb.co/QQJsY6S/download.png" alt="" className='me-3' />
        </Marquee>
    );
};

export default Company;
