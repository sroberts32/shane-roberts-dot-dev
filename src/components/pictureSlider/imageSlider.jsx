import { React, useState} from 'react';
import { SliderData } from './SliderData';

export const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    return (
        <section>
            {/* LEFT AND RIGHT ARROWS */}
            <button className="prevSlide" onClick={prevSlide}>&#10094;</button>
            <button className="nextSlide" onClick={nextSlide}>&#10095;</button>


            {SliderData.map((slide, index) => {
                return (
                    // <div>
                    <div className={index === current ? 'slide active' : 'slide'} key = {index} data-testid='slide'>
                        {index === current && (<img src={slide.image} />)}
                    </div>
                )
            })}
        </section>
    )
}