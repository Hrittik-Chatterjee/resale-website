import React from 'react';
import Categories from './Categories';
import Slider from './Slider';
import SliderAndAbout from './SliderAndAbout';

const Home = () => {
    return (
        <div>
         <SliderAndAbout></SliderAndAbout>
          <Categories></Categories>
        </div>
    );
};

export default Home;