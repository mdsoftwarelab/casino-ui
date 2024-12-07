import React from 'react';
import './card.css'

const Card = ({image, title, url, isPromo = false}) => {
    return (
        <div className="card">
            <div className="card-img">
                <a href={url}>
                    <img className="card-img-top w-fill" src={image} alt={title}/>
                </a>
                <div className="overlay">
                    <button className="btn-secondary-md">Play now</button>
                </div>
            </div>
            <div className={`${isPromo ? "card-title-accent" : "card-title-tertiary"} p-sm`}>
                <div className="flex ml-sm">
                    <h3>{title}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card;