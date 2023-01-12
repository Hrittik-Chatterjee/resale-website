import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SpecificWatchCard from './SpecificWatchCard';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from '../Context/AuthProvider';


const SpecificWatchList = () => {
    const { user } = useContext(AuthContext)
    const { _id, } = useLoaderData()
    // const { modelName,details,img,resalePrice,originalPrice,Location,yearsOfUse,seller,postedTime}=products


    const [productList, setproductList] = useState([])
    useEffect(() => {
        fetch(`https://last-watch-server.vercel.app/watchComName/${_id}`)
            .then(res => res.json())
            .then(data => setproductList(data.products))
    })



    const handlePlaceReview = event => {
        event.preventDefault()
        const form = event.target
        const name = user?.displayName
        const photo = user?.photoURL
        const review = form.review.value
        const email = user?.email


        const reviewList = {
            service: _id,
            patient: name,
            email: email,
            photo: photo,
            review: review

        }

        fetch('https://service-server-rnwu6n1kt-hrittik-chatterjee.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewList)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged)
                    alert('Review added')
                form.reset()
            })
            .catch(er => console.log(er))
    }



    return (
        <div>
            <div >
                {user && user?.uid ?
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-4 my-6 ml-4 '>

                            {
                                productList.map(watchBrand => <SpecificWatchCard key={uuidv4()} watchBrand={watchBrand}></SpecificWatchCard>)
                            }
                        </div>

                        <div>
                            <form onSubmit={handlePlaceReview}>
                                <div className="overflow-x-auto w-full">
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12 my-4">
                                                <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user?.displayName}</div>
                                        </div>
                                    </div>
                                    <input type="text" placeholder="Please input the modelname" name='modelName' className="input input-bordered input-info w-full max-w-xs" required /> <br />
                                    <input type="text" placeholder="Please input the original price" name='originalprice' className="input input-bordered input-info w-full max-w-xs" required /> <br />
                                    <input type="text" placeholder="Please input the resale price" name='resaleprice' className="input input-bordered input-info w-full max-w-xs" required /><br />
                                    <input type="text" placeholder="Please input your address" name='location' className="input input-bordered input-info w-full max-w-xs" required /><br />
                                    <input type="text" placeholder="Usage Time" name='
                                    yearsOfUse' className="input input-bordered input-info w-full max-w-xs" required />
                                    <br />
                                    <input type="text" placeholder="Please input your product image" name='img' className="input input-bordered input-info w-full max-w-xs" required />
                                    <br />
                                    <button className='btn btn-primary px-4 py-0 my-3 '> Add</button>
                                </div>
                            </form>
                        </div>



                    </div> :
                    <div>
                        <h2 className='text-yellow-500  text-2xl my-44 ml-16 font-bold'>PLEASE LOG IN TO OR SIGN UP TO SEE THE AVAILABLE WATCHES OF YOUR DESIRED BRAND <br />AND TO BUY AND SELL PRODUCTS </h2>
                    </div>
                }

            </div>
        </div>
    );
};

export default SpecificWatchList;