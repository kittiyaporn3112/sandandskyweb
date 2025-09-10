import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = ({ children, nextSlide, prevSlide }) => {

    return (
        <div className="carousel">
            <IoIosArrowBack
                onClick={prevSlide}
                className="arrow arrow-left"
            />
            <div>
                {children}
            </div>
            <IoIosArrowForward
                onClick={nextSlide}
                className="arrow arrow-right"
            />
        </div>
    )
}

export default Carousel

