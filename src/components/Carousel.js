import React, { useState, useRef, useEffect } from "react";
import ad1 from "../img/ad-1.jpg";
import ad2 from "../img/ad-2.jpg";
import ad3 from "../img/ad-3.jpg";
import ad4 from "../img/ad-4.jpg";
import ad5 from "../img/ad-5.jpg";
import ad6 from "../img/ad-6.jpg";
import ad7 from "../img/ad-7.jpg";
import ad8 from "../img/ad-8.jpg";
import ad9 from "../img/ad-9.jpg";
import ad10 from "../img/ad-10.jpg";
import ArrowLeft from "../img/arrow-left.png";
import ArrowRight from "../img/arrow-right.png";

const Carousel = () => {
    
    const [multiple, setMultiple] = useState(9);
    const trackRef = useRef();
    const slideRef = useRef();
    
    useEffect(()=>{
        const slideWidth = slideRef.current.offsetWidth;
        trackRef.current.style.marginLeft = `-${multiple * slideWidth}px`
    }, [multiple])

    const onbtnLeft = () => {
        if(multiple>=0 && multiple<9){
            setMultiple(multiple+1)
        }
    }

    const onbtnRight = () => {
        if(multiple>=1 && multiple<=10){
            setMultiple(multiple-1)
        }
    }

    const carouselArr = [0,1,2,3,4,5,6,7,8,9];
    const carouselBtn = carouselArr.map((index)=>{
        const currentSlide = multiple + index == 9 ? "current-slide" : "";
        const onBtnClick =(index)=>{
            setMultiple(9-index);
        }
        return (
            <button key={index} onClick={()=> onBtnClick(index)} className={`carousel__indicator ${currentSlide}`}></button>
        )
    })

    return (
            <div className="carousel">
                <button className="carousel-btn btn-left" onClick={onbtnLeft}>
                    <img src={ArrowLeft} alt="arrow-left" />
                </button>

                <div className="carousel__track-container">
                    <ul className="carousel__track" ref={trackRef}>
                        <li className="carousel__slide" ref={slideRef}>
                            <img src={ad1} alt="pic-1" className="carousel__image" />
                        </li>
                        <li className="carousel__slide">
                            <img src={ad2} alt="pic-2" className="carousel__image" />
                        </li>
                        <li className="carousel__slide">
                            <img src={ad3} alt="pic-3" className="carousel__image" />
                        </li>
                        <li className="carousel__slide">
                            <img src={ad4} alt="pic-4" className="carousel__image" />
                        </li>
                        <li className="carousel__slide">
                            <img src={ad5} alt="pic-5" className="carousel__image" />
                        </li>
                        <li className="carousel__slide">
                            <img src={ad6} alt="pic-6" className="carousel__image" />
                        </li>
                        <li className="carousel__slide">
                            <img src={ad7} alt="pic-7" className="carousel__image" />
                        </li>
                        <li className="carousel__slide">
                            <img src={ad8} alt="pic-8" className="carousel__image" />
                        </li>
                        <li className="carousel__slide">
                            <img src={ad9} alt="pic-9" className="carousel__image" />
                        </li>
                        <li className="carousel__slide">
                            <img src={ad10} alt="pic-10" className="carousel__image" />
                        </li>
                    </ul>
                </div>

                <button className="carousel-btn btn-right" onClick={onbtnRight}>
                    <img src={ArrowRight} alt="arrow-right" />
                </button>

                <div className="carousel__nav">
                    {carouselBtn}
                </div>
            </div>
    )
}

export default Carousel;