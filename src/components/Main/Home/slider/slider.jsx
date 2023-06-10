import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../App.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import GetMovies from '../../../../api/api';
import {useSelector} from "react-redux";

const Slider = () => {
    let movies = useSelector(state => state.catalogSt.movieList);
    GetMovies();
    return (     
        
       <div className="main__slider slider">    
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                {movies.map(slide =>{
                    return (
                        <SwiperSlide>
                            <div className="slider__container" key={slide.id} style={{backgroundColor: slide.bgcolor}}>
                                <div className="slider__titleBox">
                                    <h1 className="slider__title">
                                        {slide.title}                          
                                    </h1>
                                    <p className="slider__txt">
                                        {slide.release_date}                          
                                    </p>
                                    <button className="slider__btn" type="button">
                                        
                                                                 
                                    </button>
                                </div>
                                <div className="slider__imgBox">
                                    <img 
                                        src={'https://image.tmdb.org/t/p/original' + slide.backdrop_path}
                                        alt={slide.id}
                                    />                    
                                </div>                          
                            </div>
                        </SwiperSlide>
                    )
                })}
                </Swiper>
            </>
        </div>
        
    );


                         
}

export default Slider;