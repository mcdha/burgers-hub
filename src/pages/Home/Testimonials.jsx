import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

const imageArray = [
  'https://meragor.com/files/styles//220_220_bottom_wm/avatar-426202-051867png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXmQ1uh4nsagjsVaz2NEBTUwHTNiqETCduQ&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGm4yh3BapGEsi04l_DPraIgmdsIT4UXv9Ug&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNqW4tBpOf-L8V3OHVtuuHbHINM52zJYxJ2Gx8BRy758w5N_hD82tV4KvFrA0imJYxhFM&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKeQ4QWorwbbXb1UX3n7vy1yYq6zMwvnZ8jJANDTy1z3dat7gj385fOx_-ILEtpfpw3bo&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvkmZIUIExg96mNMgJBmeRMfcyyzJU9MSksQ&usqp=CAU'
];

const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    return imageArray[randomIndex];
  };

const testimonials = [
  {
    id: 1,
    image: getRandomImage(),
    name: 'John Doe',
    rating: 5,
    description: 'This is a great product. I love it! I wanna order again',
  },
  {
    id: 2,
    image: getRandomImage(),
    name: 'Jane Smith',
    rating: 4,
    description: 'Impressive service and support. I wanna order again',
  },
  {
    id: 3,
    image: getRandomImage(),
    name: 'Mc',
    rating: 3,
    description: 'Superb! This is awesome, Delicious. I wanna order again',
  },
];

const Testimonials = () => {

    const splideOptions = {
        type: 'loop',
        padding: '30%',
    };

  return (
   
    <div className="container mt-5">
            <h2 className='text-center'>What Does Our Costumer`s Feedback</h2>
            <p className='p-hero text-center'>
                At our establishment, customer feedback is invaluable to us. We highly value the opinions and experiences of our customers, as they help us continually improve and enhance our services. We encourage you to share your thoughts, suggestions, and any feedback you may have. Your input is instrumental in shaping our offerings and ensuring that your dining or delivery experience is always exceptional.
            </p>
<br />
        <Splide className='mt-5' options={splideOptions}>
          {testimonials.map((testimonial) => (
            <SplideSlide key={testimonial.id}>
              <MDBCard className='h-card' style={{ maxWidth: '100%', height: '12rem', boxShadow: '0px 0px 1px 1px #c49c0b' }}>
                <MDBRow>
                  <MDBCol className='testimonial-col' md='5'>
                    <div className='testimonial-image-box'><MDBCardImage className='testimonial-image' src={testimonial.image} alt={testimonial.name} fluid /></div>
                  </MDBCol>
                  <MDBCol>
                    <MDBCardBody>
                      <MDBCardTitle>{testimonial.name}</MDBCardTitle>
                      <MDBCardText>{testimonial.description}</MDBCardText>
                      <div className="rating">
                        {Array.from({ length: 5 }, (_, index) => (
                          <span key={index} className="star">
                            <FontAwesomeIcon
                              icon={faStar}
                              style={{
                                color: index < testimonial.rating ? 'gold' : 'gray',
                              }}
                            />
                          </span>
                        ))}
                      </div>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </SplideSlide>
          ))}
        </Splide>
      </div> 
  );
};

export default Testimonials;
