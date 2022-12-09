import React from 'react';

const About = () => {
    return (
        <div className='w-1/2  h-96 overflow-hidden mx-2 rounded-2xl mt-56 ml-10'>
            <div className="hero h-96" style={{ backgroundImage: `url("https://i.ibb.co/vDY5mdR/Screenshot-9.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">About Desired Watch</h1>
                        <p className="mb-5">Buy and sell preowned luxury watches at Desired Watches. We're the premier buyer and seller of used luxury watches including Rolex,Patek Philippe and OMEGA . We do more than just sell watches, we believe in doing things differently. By putting our customers first and investing in our team, we guide and empower you to buy or sell with confidence</p>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;