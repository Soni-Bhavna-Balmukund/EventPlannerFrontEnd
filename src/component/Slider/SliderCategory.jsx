import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from 'react-bootstrap';
import { Autoplay, Pagination, Navigation, Grid } from 'swiper/modules';
import { useSelector } from 'react-redux'
import 'swiper/css/grid';
import cat1 from '../../assets/images/cat1.webp'
import cat2 from '../../assets/images/cat2.webp'
import cat3 from '../../assets/images/cat3.webp'
import cat10 from '../../assets/images/cat10.webp'
import cat11 from '../../assets/images/cat11.webp'
import cat12 from '../../assets/images/cat12.webp'
import cat13 from '../../assets/images/cat13.webp'
import cat14 from '../../assets/images/cat14.webp'
import cat15 from '../../assets/images/cat15.webp'
import cat16 from '../../assets/images/cat16.webp'
import cat4 from '../../assets/images/cat4.avif'
import cat5 from '../../assets/images/cat5.avif'
import cat6 from '../../assets/images/cat6.avif'
import cat7 from '../../assets/images/cat7.avif'
import cat8 from '../../assets/images/cat8.avif'
import cat9 from '../../assets/images/cat9.avif'

const SliderCategory = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const catImages = [cat16, cat15, cat14, cat10, cat11, cat13, cat1, cat3, cat2, cat8]
    const category = useSelector((state) => state.usertype.categorytype)
    const [showAll, setShowAll] = useState(false);
    const visibleCategories = showAll ? category : category.slice(0, 10);
    console.log(visibleCategories, 'sh')
    return (
        <>
            <Swiper
                key={showAll ? 'grid-2' : 'grid-1'}
                slidesPerView={6}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true
                }}
                navigation={true}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                        grid: {
                            rows: showAll ? 2 : 1,
                        }
                    },
                    576: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                        grid: {
                            rows: showAll ? 2 : 1,
                        }
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        grid: {
                            rows: showAll ? 2 : 1,
                        }
                    },
                    992: {
                        slidesPerView: 5,
                        spaceBetween: 25,
                        grid: {
                            rows: showAll ? 2 : 1,

                        }
                    },
                    1200: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                        grid: {
                            rows: showAll ? 2 : 1,

                        }
                    }
                }}
                modules={[Autoplay, Pagination, Navigation, Grid]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className=" SliderCat mySwiper pb-5" >
                {  visibleCategories.map((item, index) => (

                        <SwiperSlide key={index} className='catslide'>
                            <div className="image-wrapper">
                                <img src={catImages[index % catImages.length]} alt={item.cname} />
                            </div>
                            <div className='cat-name'>{item.cname}</div>
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
           <div className='text-center py-3'> <Button onClick={() => setShowAll(!showAll)}>
                {showAll ? 'Show Less Category' : 'Show All Category'}
            </Button></div>
        </>
    )
}

export default SliderCategory