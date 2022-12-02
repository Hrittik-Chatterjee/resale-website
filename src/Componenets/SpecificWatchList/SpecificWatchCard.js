import React from 'react';
import { Link } from 'react-router-dom';

const SpecificWatchCard = ({ watchBrand }) => {
    const { modelName, details, img, resalePrice, originalPrice, location, yearsOfUse, seller, postedTime } = watchBrand
    return (
        <div className="card lg:card-side bg-black shadow-xl text-white">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-red-600">{modelName}</h2>
                <p>{details.substring(0, 85) + "..."}</p>
                <ul >
                    <li>Original Price: {originalPrice}</li>
                    <li>Resale Price: {resalePrice}</li>
                    <li>Location: {location}</li>
                    <li>Years of use: {yearsOfUse}</li>
                    <li>Seller Name: {seller}</li>
                    <li>Posted: {postedTime}</li>
                </ul>
                <div className="card-actions justify-end">
                    
                </div>
            </div>
        </div>
    );
};

export default SpecificWatchCard;