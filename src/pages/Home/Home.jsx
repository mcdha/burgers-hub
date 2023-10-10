import React from 'react'
import './home.css'


const Home = () => {
  return (
   <>
   <img className='style-effect' src="public/style-effect/hero-style.svg" />

   <section>
    <div className="container">
        <div className="row">
            <div className="col-12 col-lg-6 col-md-6">
                <h1 className='h1-hero'>Your Favourite Burger Delivered Hot and Fresh</h1>
                <p className='p-hero'>Satisfy Your Cravings, One Bite at a Time! Our mouthwatering burgers, crafted with the finest ingredients and bursting with flavor, are the perfect solution to your hunger pangs, ensuring that each bite is a tantalizing journey of taste and satisfaction.
                </p>
                <button className='btn btn-rounded btn-hero'>Order now &nbsp;<i className="fas fa-arrow-right-long"></i></button>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
                <div className="hero-box">
                    <img className='hero-image' src="public/images/hero.png" alt="hero"/>
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
   <section className="section3 mt-5">
    <div className="container">
        <div className="row">
            <div className="col-12 col-lg-4 col-md-6">
                <div className="hero-box1">
                    <img className='hero-image1' src="public/images/hero1.png" alt="hero1"/>
                </div>  
            </div>

            <div className="col-12 col-lg-8 col-md-6 mt-2">
                <h2>Burger Is An Important Part Of A Balanced Diet</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti quod, quasi, exercitationem officiis dolor accusantium perferendis distinctio error impedit cumque eum magni reprehenderit beatae corrupti? Debitis corrupti dicta dolore.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti quod, quasi, exercitationem officiis dolor accusantium perferendis distinctio error impedit cumque eum magni reprehenderit beatae corrupti? Debitis corrupti dicta dolore.</p>
            </div>
        </div>
    </div>
    </section>

   </>

        
   
  )
}

export default Home