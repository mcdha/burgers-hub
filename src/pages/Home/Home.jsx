import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './home.css'



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
                <h2 className=''>Burger Is An Important Part Of A Balanced Diet</h2>
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

   </>

        
   
  )
}

export default Home