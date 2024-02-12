import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './home.css'
import Api from './Api';
import Testimonials from './Testimonials';
import { MDBModal, MDBModalHeader, MDBModalBody, MDBBtn, MDBModalFooter } from 'mdb-react-ui-kit';




const Home = () => {

    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const openVideoModal = () => {
        setIsVideoModalOpen(true);
};

    const closeVideoModal = () => {
        setIsVideoModalOpen(false);
};

    const videoOptions = {
        width: '100%',
        height: 500,
};

    const videoId = '7O0FcxNjB6Q';
// _________________________________________________________________


    const [email, setEmail] = useState('');
    const [successModal, setOpen] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
}

    const handleEmailSubmit = () => {
        localStorage.setItem('storedEmail', email);
        setOpen(true);
        setEmail('');
}

    const closeSuccessModal = () => {
        setOpen(false);
}

  return (
   <>
   <img className='style-effect' src="images/style-effect/hero-style.svg" />

   <section>
    <div className="container">
        <div className="row">
            <div className="col-12 col-lg-6 col-md-6">
                <h1 className='h1-hero'>Your Favourite Burger Delivered Hot and Fresh</h1>
                <p className='p-hero'>Satisfy Your Cravings, One Bite at a Time! Our mouthwatering burgers, crafted with the finest ingredients and bursting with flavor, are the perfect solution to your hunger pangs, ensuring that each bite is a tantalizing journey of taste and satisfaction.
                </p>
                <button className='btn btn-rounded btn-hero'>Order Now &nbsp;<i className="fas fa-arrow-right-long"></i></button>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
                <div className="hero-box">
                    <img className='hero-image' src="images/hero.png" alt="hero"/>
                </div>  
            </div>
        </div>
    </div>
   </section>

   <section className='section2'>
    <div className="container">
        <div className="row">
            <div className="col-4 d-flex flex-column align-items-center text-center">
                <button className='btn btn-hero btn-clock'><i className="fas fa-clock home-icon py-2"></i></button>
                <br />
                <p className='fw-bold'>Today 10am - 7pm</p>
                <p>Working Hour`s</p>
            </div>
            
            <div className="col-4 d-flex flex-column align-items-center text-center">
                <button className='btn btn-hero btn-location'><i className="fas fa-location-dot home-icon py-2"></i></button>
                <br />
                <p className='fw-bold'>Holy Spirit, Quezon City</p>
                <p>Get Direction`s</p>
            </div>

            <div className="col-4 d-flex flex-column align-items-center text-center">
                <button className='btn btn-hero btn-phone'><i className="fas fa-phone home-icon py-2"></i></button>
                <br />
                <p className='fw-bold'>+63 945 385 4770</p>
                <p>Call Online</p>
            </div>
        </div>
    </div>
   </section>
   
   {/* <img className='style-effect1' src="public/style-effect/hero-style1.svg" /> */}
   <section className="section3">
    <div className="container">
        <div className="row">
            <div className="col-12 col-lg-4 col-md-6">
                <div className="hero-box1">
                    <img className='hero-image1' src="images/hero1.png" alt="hero1"/>
                </div>  
            </div>

            <div className="col-12 col-lg-8 col-md-6 mt-2">
                <h2>Burger Is An Important Part Of A Balanced Diet</h2>
                <p className='p-hero'>Burgers play a crucial role in maintaining a balanced diet. They provide an excellent source of protein, essential for muscle growth and repair, as well as carbohydrates that offer a quick source of energy.
                </p>
                <p className='p-hero'>Furthermore, burgers can be a versatile canvas for incorporating various vegetables, like lettuce, tomatoes, and onions, enriching the meal with vitamins and minerals. 
                </p>
                
                <button type="button" className="btn btn-rounded btn-nav btn-lg" onClick={openVideoModal}>
                    Watch Video &nbsp; <i className="fas fa-play"></i>
                </button>

                    <div className={`modal fade ${isVideoModalOpen ? 'show' : ''}`} id="myModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!isVideoModalOpen} style={{ display: isVideoModalOpen ? 'block' : 'none' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Video Ads Promotion
                                </h5>
                                <button type="button"className="btn-close" onClick={closeVideoModal} aria-label="Close">
                                </button>
                            </div>
                            <div className="modal-body">
                                {isVideoModalOpen && (
                                    <YouTube videoId={videoId} opts={videoOptions} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </section>

    <section className='section4 mt-5'>
        <div className="container">

            <h2 className='text-center'>How It Works</h2>
            <p className='p-hero text-center'>
                Welcome to our fast-food experience! Here, we'll take you through the seamless process of ordering and enjoying your favorite burgers, whether you prefer dining in or having your order delivered to your doorstep. Let's dive into how each of these steps works to ensure you have a delicious and convenient dining or delivery experience, tailored to your preferences.
            </p>


            <div className="row mt-5">
                <div className="col-12 col-lg-4 col-md-4 mt-sm-3">
                    <div className="card text-center shadow-inner hover-shadow">
                        <div className="card-header"><i className="fas fa-burger fa-2x"></i></div>
                        <div className="card-body">
                            <h5 className="card-title">Pick Burger`s</h5>
                            <p className="card-text">When it comes to picking the perfect burger, the process is a delightful journey from the moment you step into your favorite burger joint or access their user-friendly website or mobile app.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4 col-md-4 mt-sm-3">
                    <div className="card text-center shadow-inner hover-shadow">
                        <div className="card-header"><i className="fas fa-money-check fa-2x"></i></div>
                        <div className="card-body">
                            <h5 className="card-title">Payment Methods</h5>
                            <p className="card-text">Selecting a payment method for your burger order is designed to be both flexible and accommodating, ensuring that the payment process is as seamless as your delivery and dining experience.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4 col-md-4 mt-sm-3">
                    <div className="card text-center shadow-inner hover-shadow">
                        <div className="card-header"><i className="fas fa-truck-fast fa-2x"></i></div>
                        <div className="card-body">
                            <h5 className="card-title">Delivery Fast</h5>
                            <p className="card-text">The delivery process is a well-orchestrated system designed to bring your delicious burger order to your doorstep with speed and precision. Should you opt for the convenience of delivery.</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </section>

    <Api />
    <Testimonials />
    
    <section>
        
    <MDBModal open={successModal}>
  <MDBModalHeader>Success</MDBModalHeader>
  <MDBModalBody>Your email has been submitted successfully.</MDBModalBody>
  <MDBModalFooter>
    <MDBBtn color="success" onClick={closeSuccessModal}>Close</MDBBtn>
  </MDBModalFooter>
</MDBModal>


    <br /><br />
   <div className="container mt-5">
          <h2 className='text-center'>Join Our Community to Get Discount</h2>
          <div className='d-flex justify-content-center mt-4'>
              <input type="email" id="email" name="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
              <button className='btn btn-hero btn-rounded ms-2' type="submit" onClick={handleEmailSubmit}>Submit</button>
          </div>
    </div>

    </section>
   </>

        
   
  )
}

export default Home