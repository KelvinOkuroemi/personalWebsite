import React from 'react'
import styles from '../constants/style.js'
import { image } from '../assets/assets/index.js'


const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col mt-3 ss:-mt-16 ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 text-gray-400">
        <span className="text-white">welcome &nbsp; </span> to Kelvin's &nbsp; <span className="text-white">website</span>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins ss:text-[72px] text-[52px] text-white ss:leading-[85px] leading-[75px]">
          MY FIRST <br className="sm:block hidden" /><span className="text-gradient">
          DIGITAL HUT
          </span>
        </h1>
        {/* <div className="ss:flex hidden md:mr-4 mr-0">
          <HireMe />
        </div> */}
      </div>

    <p className={`${styles.paragraph} md:min-w-[470px] mt-5 md:mr-4 mr-0`}>
      Forgive me if I do a bad job at pitching myself, I'm not a brand or a product. Just a lad who curiously found purpose in creativity and innovation.
    </p>
    </div>
    <div className="ss:mt-32 mt-16 flex items-center justify-center ml-4">
      <img src={image} alt="a picture of me" className="w-[100%] h-[60%] object-contain rounded-lg relative"/>
    </div>
  </section>
)

export default Hero