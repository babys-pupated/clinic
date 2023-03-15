import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { LOOP } from "@splidejs/splide";

export default function Reviews() {
  return (
    <>
      <div className="container-0">
        <div className="arrows">
          <h1>Отзывы</h1>
          {/* <div><img src="../img/arrow2.svg" alt="" />2/5<img src="../img/arrow.svg" alt="" /></div> */}
        </div>
        <div className="rewiews-container">
          <Splide
            options={{
              rewind: true,
              width: "100%",
              gap: "20px",
              perPage: 3,
              perMove: 1,
              autoplay: true,
              interval: 2500,
              type: "loop",
              arrows: true,
              mediaQuery: "max",
              breakpoints: {
                1080: {
                  perPage: 2,
                },
                880: {
                  perPage: 2,
                },
                425: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide>
              <div className="rewiews">
                <div className="rewiews-name">
                  <h3>Ольга Шигорина</h3>
                  <p>16 декабря 2022</p>
                </div>
                <p className="description">
                  Ставила капельницы от токсикоза, потому что не могла уже ни
                  есть, ни пить, а только лежать в позе эмбриона. Терапевт сразу
                  осмотрела, провела консультацию, и 3 дня капали. Почувствовала
                  себя наконец человеком! Вернулись силы, аппетит. До завершения
                  токсикоза ещё не одна неделя, но если станет хуже прибегу
                  снова на капельницы! Спасибо!
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="rewiews">
                <div className="rewiews-name">
                  <h3>Амина Шабагатова</h3>
                  <p>5 октября 2022</p>
                </div>
                <p>
                  Обращались к детскому неврологу . Грамотный специалист,
                  уважительное отношение к клиентам. Клиника светлая и очень
                  уютная
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="rewiews">
                <div className="rewiews-name">
                  <h3>Асият Манапова</h3>
                  <p>12 сентября 2022</p>
                </div>
                <p>
                  Отзывчивый персонал, приемлемые цены И вообще, нет ощущения
                  что ты находишься в больнице, очень уютно и тепло! Отдельное
                  спасибо за процедуру БАК, впервые здесь попробовала, в шоке от
                  полученного эффекта😘
                </p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </>
  );
}



                
                