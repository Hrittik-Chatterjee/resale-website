import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CatWatchCard from './CatWatchCard.js/CatWatchCard';

const Categories = () => {

    const [watchCompanyNames, setWatchCompanyNames] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/watchComName')
            .then(res => res.json())
            .then(data => setWatchCompanyNames(data))
    })
    return (
        <div>
            <p className="text-5xl font-bolder text-center my-6 ">Brands</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 ml-4 '>

                {
                    watchCompanyNames.map(watchCompanyName => <CatWatchCard key={watchCompanyName._id} watchCompanyName={watchCompanyName}></CatWatchCard>)
                }
            </div>
        </div>
    );
};

export default Categories;