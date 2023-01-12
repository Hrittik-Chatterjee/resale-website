import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className=' flex justify-center'>
            <div>
                <img className='w-100' src="https://static.vecteezy.com/system/resources/previews/006/549/647/original/404-landing-page-free-vector.jpg" alt="" />

                <div className='flex justify-center'>

                    <div>
                    <h1 className='text-2xl font-bold text-emerald-500 mt-8'>You Have entered the wrong keywords</h1>
                    <p className='mt-6 text-sm'>Click the button bellow to go back to homepage</p>
                    <Link to={'/home'}><button className='bg-[#ef4444] px-6 py-2 rounded mt-3 text-white'>Homepage</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;