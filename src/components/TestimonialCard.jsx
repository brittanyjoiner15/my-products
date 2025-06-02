import PropTypes from 'prop-types';

const TestimonialCard = ({ name, role, quote, avatar }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <p className="testimonial-quote">{quote}</p>
        <div className="testimonial-author">
          {avatar && <img src={avatar} alt={name} className="testimonial-avatar" />}
          <div className="testimonial-info">
            <h3 className="testimonial-name">{name}</h3>
            <p className="testimonial-role">{role}</p>
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
