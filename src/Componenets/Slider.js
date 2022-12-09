import React from 'react';


const Slider = () => {
    return (


        // 2nd ta
        <div className='my-12 w-1/2'>
            <div className="carousel  h-72">
                <div id="item1" className="carousel-item w-full">
                    <img alt='image1' src="https://i.ibb.co/QNCmh73/soul1.jpg" className='w-full rounded-2xl' />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img alt='image2' src="https://i.ibb.co/DLwKh21/soul2.jpg" className='w-full rounded-2xl' />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img alt='image3' src="https://i.ibb.co/khrC02q/soul3.jpg" className='w-full rounded-2xl' />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img alt='image4' src="https://i.ibb.co/cvQzFcc/soul4.jpg" className='w-full rounded-2xl' />
                </div>
            </div>
            <div className="flex justify-center py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>

    );
};

export default Slider;