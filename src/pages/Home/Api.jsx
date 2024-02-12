import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Import the star icon
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Api = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/menu-items' )
      .then(response => {
        setMenuItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className='section5 mt-5'>
      <div className="container">
        <h2 className='text-center'>Explore Our Best Menu</h2>
        <p className='p-hero text-center'>Discover a wide range of delicious items on our menu. From appetizers to main courses and desserts, we have something for every taste. Explore our best menu selections below.</p>
      </div>

      <div>
        {loading ? (
          <p className='p-hero text-center'>Loading...</p>
        ) : (
          <div className="container">
            <div className="row">
              {menuItems.map(item => (
                <div key={item.id} className="col-12 col-md-4 mb-4">
                  <div className="card">
                    <div className=" bg-image hover-overlay ripple d-flex justify-content-center" data-mdb-ripple-color="light">
                    <LazyLoadImage className='card-trans' src={item.image_link} alt={item.name} effect="blur" />
                      <a href="#!">
                        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </div>
                    <div className="card-body">
                      <div className='d-flex'>
                        <h3 className="card-title mb-3">{item.name}</h3>
                        <p className='price'>${item.price}</p>
                      </div>
                      <p className="card-text mb-5">{item.description}</p>
                        <div className="rate">
                                {Array.from({ length: 5 }, (_, index) => {
                                    const value = 1 + index;
                                    return (
                                    <label key={value} htmlFor={`star${value}`} title={`${value} stars`} className="star-label">
                                        <input
                                        type="radio"
                                        id={`star${value}`}
                                        name="rate"
                                        value={value}
                                        checked={rating === value}
                                        onChange={() => handleRatingChange(value)}
                                        style={{ display: 'none' }}
                                        />
                                        <FontAwesomeIcon
                                        icon={faStar}
                                        style={{ color: rating >= value ? 'gold' : 'gray' }}
                                        />
                                    </label>
                                    );
                                })}
                            </div>

                            <a href="">
                            <div className='card-style d-flex justify-content-end'>
                            <i className="fas fa-plus"></i><img src="images/style-effect/card-style.png" alt="Card Style" />
                            </div>
                            </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Api;
