import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation, Grid } from 'swiper/modules';
import 'swiper/css/grid';
// import UseEffectsFile from '../Admin/UseEffectsFile';
// import UseEffectsFile from './Admin/UseEffectsFile';


const SliderPlaces = ({ images = [] }) => { 
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, Grid]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className=" mySwiper pb-5" >

                {images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item?.url}
                            alt={`Image ${index + 1}`}
                            className="slider-image w-100"
                            style={{ height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                    </SwiperSlide>
                ))
                }

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
                    {/* <UseEffectsFile/> */}
            
        </>
    )
}

export default SliderPlaces