import React from 'react';
import { Link } from 'react-router-dom';

const CatWatchCard = ({ watchCompanyName }) => {
    const { logo, title, service_id, _id } = watchCompanyName
    return (
        <div className="card  w-11/12 bg-base-100 shadow-xl image-full">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p>{title}</p>
                <div className="card-actions justify-end">
                <Link to={`/watchComName/${_id}`}><button className="btn btn-primary">Available Watches</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CatWatchCard;