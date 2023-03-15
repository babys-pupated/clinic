import React from "react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { LOOP } from "@splidejs/splide";

export default function Reviews() {
    return <>
        <div className="container-0">
            <div className="arrows">
                <h1>Отзывы</h1>
                {/* <div><img src="../img/arrow2.svg" alt="" />2/5<img src="../img/arrow.svg" alt="" /></div> */}
            </div>
            <div className="rewiews-container">
            <Splide options={ {
                    rewind: true,
                    width : "100%",
                    gap   : '20px',
                    perPage: 3,
                    perMove: 1,
                    autoplay: true,
                    interval: 2500,
                    type: 'loop',
                    arrows: true,
                    mediaQuery: 'max',
                    breakpoints: {
                            1080: {
                                perPage: 2,
                            },
                            880: {
                                perPage: 2,
                            },
                            425: {
                                perPage: 1,
                            }
                        }
                } }>
                <SplideSlide>
                    <div className="rewiews">
                        <div className="rewiews-name">
                            <h3>Мария Ермолаева</h3>
                            <p>29 июня 2022</p>
                        </div>
                        <p className="description">Хожу сюда на капельницы, долго болела спина от сидячей работы. Клинику посоветовала тётя. В первый же день оперативно получила консультацию доктора, и сразу же приступили к лечеению. После третьей капельницы стало гораздо легче. Спасибо за такую атмосферу уюта, заботы и за ваш профессионализм. Особая признательность процедурной медсестре Алие</p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="rewiews">
                        <div className="rewiews-name">
                            <h3>​Ольга Шигорина</h3>
                            <p>16 декабря 2022</p>
                        </div>
                        <p>Ставила капельницы от токсикоза, потому что не могла уже ни есть, ни пить, а только лежать в позе эмбриона. Терапевт сразу осмотрела, провела консультацию, и 3 дня капали. Почувствовала себя наконец человеком! Вернулись силы, аппетит. До завершения токсикоза ещё не одна неделя, но если станет хуже прибегу снова на капельницы! Спасибо!</p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="rewiews">
                        <div className="rewiews-name">
                            <h3>Зиняида Ивановна</h3>
                            <p>30 ноября 2022</p>
                        </div>
                        <p>Все в одном месте, и это здорово! Мужу массаж, мне капельницу с витаминами👍🏻 очень понравилось, что есть детские специалисты, при чем достаточно грамотные😍 рекомендую однозначно! И моя семья еще не раз обратится в это прекрасное место</p>
                    </div>
                </SplideSlide>
                   
            </Splide>
            </div>
        </div>
    </>;
}



                
                