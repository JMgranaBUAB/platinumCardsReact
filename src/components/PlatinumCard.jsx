import React from 'react';

const PlatinumCard = ({ image, title, date }) => {
    return (
        <div className="card" style={{ width: '120px' }}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <p className="cardTitle">{title}</p>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default PlatinumCard;
