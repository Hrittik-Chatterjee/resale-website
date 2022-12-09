import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SpecificWatchCard from './SpecificWatchCard';
import { v4 as uuidv4 } from 'uuid';


const SpecificWatchList = () => {
    const { _id,  } = useLoaderData()
    // const { modelName,details,img,resalePrice,originalPrice,Location,yearsOfUse,seller,postedTime}=products


    const [productList, setproductList] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/watchComName/${_id}`)
            .then(res => res.json())
            .then(data => setproductList(data.products))
    })

    return (
        <div>
            <div >

                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-4 my-6 ml-4 '>

                    {
                        productList.map(watchBrand => <SpecificWatchCard key={uuidv4()} watchBrand={watchBrand}></SpecificWatchCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SpecificWatchList;