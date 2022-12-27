import { React, useState, useEffect } from 'react'
import { FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import { sliderData } from './Slider-data'



import './Slider.scss'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 15000;

    const nextSlide = ()=>{
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 :
        currentSlide + 1)
    };
    const prevSlide = ()=>{
        setCurrentSlide(currentSlide === 0 ? slideLength -1:
        currentSlide -1)
    };

    function auto(){
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(()=>{
        setCurrentSlide(0)
    },[])

    useEffect(()=>{
        if(autoScroll){
            auto();
        }
        return ()=> clearInterval(slideInterval)
    }, [currentSlide]);

  return (
    <div className='slider'>
        <FaArrowLeft className='arrow prev' onClick={prevSlide}/>
        <FaArrowRight className='arrow next' onClick={nextSlide}/>

        {sliderData.map((slide, index)=>{
            return(
                <div className={index === currentSlide ?
                "slide current" : "slide"} key={index}>
                    {index === currentSlide && (
                        <div>
                            <img src={slide.image}
                             alt="slide"
                             loading='lazy'
                             className='side__img'
                              />
                            {/* <div className='content'>
                                <h2>{slide.heading}</h2>
                                <p>{slide.desc}</p>
                                <hr />
                                <button className='btn'>get Started</button>
                            </div> */}
                        </div>
                    )}
                </div>
            )
        })}

    </div>
  )
}

export default Slider