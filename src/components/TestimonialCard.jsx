import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TestimonialCard = ({ testimonial }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // Dynamically import the image
    import(`../imgs/${testimonial.image}`)
      .then(module => setImageUrl(module.default))
      .catch(err => console.error('Error loading testimonial image:', err));
  }, [testimonial.image]);

  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <p className="testimonial-quote">{testimonial.quote}</p>
        <div className="testimonial-author">
          {imageUrl && <img src={imageUrl} alt={testimonial.name} className="testimonial-image" />}
          <div className="testimonial-info">
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  avatar: PropTypes.string
};

export default TestimonialCard;
