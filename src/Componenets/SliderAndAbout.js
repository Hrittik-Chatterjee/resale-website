import React from 'react';
import About from './About';
import Slider from './Slider';

const SliderAndAbout = () => {
    return (
        <div className='w-full flex'>
            <Slider></Slider>
            <About></About>
        </div>
    );
};

export default SliderAndAbout;