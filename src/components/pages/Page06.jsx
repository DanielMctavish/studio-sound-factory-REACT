import React from "react";
import './Pages.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import artist01 from "../../medias/mídias/pessoas/Ana Elise.jpg"
import artist02 from "../../medias/mídias/pessoas/Anderson Mateus.jpg"
import artist03 from "../../medias/mídias/pessoas/Anderson_rafael.jpg"
import artist04 from "../../medias/mídias/pessoas/Cristina Amy.jpg"
import artist05 from "../../medias/mídias/pessoas/Julio Arruda.jpg"
import artist06 from "../../medias/mídias/pessoas/Katia_Merry.jpg"
import artist07 from "../../medias/mídias/pessoas/Priscila Vanessa.jpg"
import artist08 from "../../medias/mídias/pessoas/Roberto Paixão.jpg"
import artist09 from "../../medias/mídias/pessoas/Suzy Anne.jpg"

export default () => {
    return (
        <div id="page06" className="pages-geral">
            <h1>Seu sonho começa agora</h1>
            <p id="text-content">
                não perca mais tempo, venha gravar seu single conosco!
                E mostre pro mundo que você é capaz de ir longe,
                que está pronto para qualquer desafio, temos muito orgulho
                de todos os nossos artistas e você poderá
                ser o próximo a fazer parte do nosso mural de honra!
            </p>

            <div id="display-artists">
                <Swiper id="swiper"
                    modules={[Navigation, Pagination]}
                    spaceBetween={25}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide id="swiper-element"><img src={artist01} /></SwiperSlide>
                    <SwiperSlide id="swiper-element"><img src={artist02} /></SwiperSlide>
                    <SwiperSlide id="swiper-element"><img src={artist03} /></SwiperSlide>
                    <SwiperSlide id="swiper-element"><img src={artist04} /></SwiperSlide>
                    <SwiperSlide id="swiper-element"><img src={artist05} /></SwiperSlide>
                    <SwiperSlide id="swiper-element"><img src={artist06} /></SwiperSlide>
                    <SwiperSlide id="swiper-element"><img src={artist07} /></SwiperSlide>
                    <SwiperSlide id="swiper-element"><img src={artist08} /></SwiperSlide>
                    <SwiperSlide id="swiper-element"><img src={artist09} /></SwiperSlide>
                </Swiper>
            </div>
            <div id="text-content" style={{height:"auto",width:"auto"}} >
                todos eles já tem nosso selo e suas músicas estão em todas as plataformas.
            </div>
        </div>

    )
}