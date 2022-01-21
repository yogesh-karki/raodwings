import React from 'react'
import './style.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ProductSlider = () => {
    const swiperData = [
        {
            img: './images/product/helmet.jpg',
            title: 'Bogotto V328 Xadrez Carbon Motocross Helmet'
        },

        {
            img: './images/product/suit.jpg',
            title: 'Arlen Ness Edge Two Piece Motorcycle Leather Suit'
        },
        {
            img: './images/product/gear.jpg',
            title: 'Berik Striper Motorcycle Leather Jacket'
        },

        {
            img: './images/product/boot.jpg',
            title: 'Bogotto Losail Evo Motorcycle Boots'
        },
        {
            img: './images/product/gloves.jpg',
            title: 'Berik 2.0 ST Motorcycle Gloves'
        },

      
      
    ]

    return (
        <section className="shop">
            <h2>Road Wings <span>Shop</span></h2>
            <p> Online shop and wholesaler, serving a global customer base</p>

            <Swiper
            
                loop={true}
                className='product-slides'
                breakpoints={{
                    "640": {
                        "slidesPerView": 1,
                        "spaceBetween": 10,
                        "loop" : false,
                    },
                    "768": {
                        "slidesPerView": 2,
                        "spaceBetween": 20
                    },
                    "1024": {
                        "slidesPerView": 4,
                        "spaceBetween": 30
                    }
                }}
            >
                {
                    swiperData.map((val,index) => {
                        return(
                            <SwiperSlide className='item' key={index}>
                                <div className="img">
                                    <img src={val.img} alt="" />
                                </div>
                                <div className="text">
                                    <h5>{val.title}</h5>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>


        </section>
    )
}

export default ProductSlider
