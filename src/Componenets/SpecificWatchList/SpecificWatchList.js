import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SpecificWatchCard from './SpecificWatchCard';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from '../Context/AuthProvider';


const SpecificWatchList = () => {
    const {user} = useContext(AuthContext)
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
           { user && user?.uid ? 
                           <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-4 my-6 ml-4 '>

                           {
                               productList.map(watchBrand => <SpecificWatchCard key={uuidv4()} watchBrand={watchBrand}></SpecificWatchCard>)
                           }
                       </div> : 
                       <div>
                         <h2 className='text-yellow-500  text-2xl my-44 ml-16 font-bold'>PLEASE LOG IN TO OR SIGN UP TO SEE THE AVAILABLE WATCHES OF YOUR DESIRED BRAND</h2>
                       </div>
                       }

            </div>
        </div>
    );
};

export default SpecificWatchList;