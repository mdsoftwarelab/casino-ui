import React from 'react';

const Card = ({image, title, url}) => {
    return (
        <div className="card">
            <div className="card-img">
                <a href={url}>
                    <img className="card-img-top" src={image} alt={title}/>
                </a>
            </div>
            <div className="card-header">
                {title}
            </div>
        </div>
    )
}

export default Card;