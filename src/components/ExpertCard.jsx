import React, { useState, useEffect } from 'react'

// Import images
import laura from '../imgs/laura.png'
import mike from '../imgs/mike.png'
import alicia from '../imgs/alicia.png'

// Image mapping
const images = {
    laura,
    mike,
    alicia
}

function ExpertCard({ expert }) {

    const renderStars = (rating) => {
        return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating))
    }

    return (
        <div className="expert-card">
            <div className="expert-header">
                <div className="expert-badge">{expert.title}</div>
                <img src={images[expert.avatar]} alt={expert.name} className="expert-avatar" />
                <h3 className="expert-name">{expert.name}</h3>
                <div className="expert-status">Based in {expert.location}</div>
            </div>
            <p className="expert-description">{expert.description}</p>
            <div className="expert-footer">
                {/* <div className="expert-rating">
                    <span className="stars">{renderStars(expert.rating)}</span>
                    <span className="rating-number">{expert.rating}</span>
                    <span className="review-count">({expert.reviews})</span>
                </div> */}
                {/* <div className="expert-tags">
                    {expert.tags.map(tag => (
                        <span key={tag} className="expert-tag">{tag}</span>
                    ))}
                </div> */}
                <button className="contact-button">
                    Contact Expert
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="button-icon">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default ExpertCard
