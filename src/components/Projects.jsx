import React from 'react';
import { projects } from '../constants/static.js'
import styles from '../constants/style.js';

import SwiperCore, {Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation])

const Projects = () => (
  <section id='projects' className={`${styles.padding} my-10`}>
    <h2 className={`${styles.heading2} ${styles.flexCenter} mb-5`}>My Work so far...</h2>
    <Swiper
      spaceBetween={15}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}

    breakpoints={{
    // when window width is >= 640px
    640: {
      width: 640,
      slidesPerView: 1,
    },
    // when window width is >= 768px
    1060: {
      width: 850,
      slidesPerView: 3,
    },
  }}
    >
      <div className={`slide-container ${styles.flexCenter}$ max-w-[1120px] w-100 py-[40px]`}>
        {projects.map((project,index) => (
          <div className="slide-content">
            <div className="card-wrapper">
            <SwiperSlide key={index}>
            <div className="card mx-2 max-w-[350px] min-h-[250px]">
                  <div className={`image-content ${styles.flexCenter}`}>
                    <span className="overlay bg-blue-gradient"></span>
                    <div className="card-image">
                      <div className={`card-img ${styles.flexCenter} ${styles.heading5}`}>{project.title}</div>
                    </div>
                  </div>

                  <div className="card-content px-3 my-8">
                    <p className={`${styles.paragraphCard} mb-5 ${styles.flexCenter}`}>{project.content}</p>
                    <div className={`${styles.flexCenter} mb-3`}>
                      <a href={project.liveLink} target="_blank">
                        <button type="button" className={`mx-3 font-poppins font-medium text-primary outline-none text-sm py-4 px-6 bg-blue-gradient rounded-lg`}>
                          Live
                        </button>
                      </a>

                      <a href={project.codeLink} target="_blank">
                        <button type="button" className={`mx-3 font-poppins font-medium text-primary outline-none text-sm py-4 px-6 bg-blue-gradient rounded-lg`}>
                          Code
                        </button>
                      </a>
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            </div>
          </div>
        ))}
      </div>
    </Swiper>
  </section>
)

export default Projects