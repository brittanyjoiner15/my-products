import React from 'react';
import PropTypes from 'prop-types'
import '../App.css'

const ProductCard = ({ image, title, description, price, onButtonClick, tags }) => (
    <div className="product-card">
        <img src={image} alt={title} className="product-card-image" />
        <h2 className="product-card-title">{title}</h2>
        <p className="product-card-description">{description}</p>
        <div className="product-card-footer">
            <span className="product-card-price">${price}</span>
            <button className="product-card-button" onClick={onButtonClick}>
                Purchase now
            </button>
        </div>
    </div>
);

export default ProductCard;
