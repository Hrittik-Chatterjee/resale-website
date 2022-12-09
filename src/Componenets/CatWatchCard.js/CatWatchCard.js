import React from 'react';
import { Link } from 'react-router-dom';

const CatWatchCard = ({ watchCompanyName }) => {
    const { logo, name, details, _id } = watchCompanyName
    return (
        <div className="card mb-16  w-11/12 bg-base-100 shadow-xl image-full">
            <figure><img  src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-name font-extrabold text-lg">{name}</h2>
                <p className='text-sm text-gray-400'>{details}</p>
                <div className="card-actions justify-end">
                <Link to={`/watchComName/${_id}`}><button className="btn bg-black text-slate-500">Available Watches</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CatWatchCard;