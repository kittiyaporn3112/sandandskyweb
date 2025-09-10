import React, { useState } from 'react'
import StarReview from '../assets/starreview.svg'
import Carousel from './Carousel'
import ReviewStar from '../assets/review.svg'

const review = [
    {
        text: <p>The moment we arrived, we felt at home. The oceanfront view from our room was breathtaking, and the staff went above and beyond to make our stay unforgettable.</p>,
        name: <p>Anna R.</p>
    },
    {
        text: <p>Dining by the beach at sunset was magical—fresh seafood, the sound of waves, and the sky painted in gold. Truly one of the best vacation experiences we’ve ever had.</p>,
        name: <p>Michel D.</p>
    },
    {
        text: <p>The spa treatments were heavenly, and the infinity pool overlooking the horizon was pure bliss. Sand & Sky is the perfect balance of relaxation and luxury.</p>,
        name: <p>Rose M.</p>
    },
]

const Review = () => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === review.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? review.length - 1 : slide - 1);
    };
    return (
        <div className='p-10'>
            <div className='flex flex-col items-center gap-5'>
                <img src={StarReview} className='w-15' />
                <h1 className='font-brygada font-bold text-2xl text-brow'>Guest Reviews</h1>
            </div>
            <Carousel
                nextSlide={nextSlide}
                prevSlide={prevSlide}
            >
                <div className='mt-10'>

                    {review.map((item, idx) => {
                        return (
                            <div key={idx}
                                className={slide === idx ? "slide" : "slide slide-hidden"}>
                                <div className='w-full md:w-lg font-inter'>
                                    <p className='text-center text-sm md:text-base'>
                                        <span className='font-brygada font-bold md:text-4xl'>“</span>
                                        {item.text}
                                        <span className='font-brygada font-bold md:text-4xl'>”</span>
                                    </p>
                                </div>
                                <div className='md:mt-15 flex flex-col items-center gap-3'>
                                    <img src={ReviewStar} className='w-25 md:w-35' />
                                    <p className='font-brygada font-bold md:text-lg text-brow'>{item.name}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Carousel>
        </div >
    )
}

export default Review