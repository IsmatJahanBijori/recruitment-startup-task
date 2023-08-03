// import { emailjs } from '@emailjs/browser';
// import React, { useRef } from 'react';
// import Swal from 'sweetalert2';
// import developer from '../../../assets/123606-desktop-and-smartphone-app-development.json'
// import Lottie from "lottie-react";


// const Contact = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_0gwzw3b', 'template_2nypb3f', form.current, '8GUFsBBPnJxztfBAn')
//             .then((result) => {
//                 console.log(result.text);
//                 Swal.fire('Message Sent')
//             }, (error) => {
//                 console.log(error.text);
//             });
//     };
//     return (
//         <div className="hero bg-light">
//         <div className="hero-content ">
//             <form ref={form} onSubmit={sendEmail} className='card-body text-center w-full '>
//                 <div className="">
//                     <label className="label">
//                         <span className="label-text">Name</span>
//                     </label>
//                     <input className="" type="text" name="user_name" />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Email</span>
//                     </label>
//                     <input className="" type="email" name="user_email" />
//                 </div>
//                 <div className="form-control">
//                     <label className="label"><span className="label-text">Message</span></label>
//                     <textarea className="" name="message" />
//                 </div>
//                 <input className="" type="submit" value="Send" />
//             </form>
//             <div className='w-full '>
//                 <Lottie animationData={developer} loop={true} />
//             </div>
//         </div>
//     </div>
//     );
// };

// export default Contact;