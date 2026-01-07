import React from 'react';
import PlatinumCard from './PlatinumCard';

const PlatformSection = ({ logo, platformName, platinums, count }) => {
    return (
        <>
            <hr />
            <div className="containerLogoPS">
                <img className={`logo${platformName}`} src={logo} alt={platformName} />
                <h5>Total: {count}</h5>
            </div>
            <div className="container">
                {platinums.map((platinum, index) => (
                    <PlatinumCard
                        key={index}
                        image={platinum[0]}
                        title={platinum[1]}
                        date={platinum[2]}
                    />
                ))}
            </div>
        </>
    );
};

export default PlatformSection;
