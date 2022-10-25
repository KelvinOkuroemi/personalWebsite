import React from 'react'
import styles from '../constants/style'
import { socialMedia } from '../constants/static'
const date = new Date()

const Footer = () => (
  <section className={`${styles.flexCenter} flex-col ${styles.paddingY} mt-10 md:-mb-14 -mb-8`}>
    <div className={`flex flex-row mb-8 w-full`}>
      <div className={`${styles.flexStart} flex flex-1 flex-col justify-start mr-10`}>
        <div className="w-[100px] text-green-400 h-[24px]">Kelvin<br></br> Okuroemi</div>
        <p className={`${styles.paragraph} mt-12 sm:max-w-[310px] max-w-[200px]`}>Let's talk about future tech, startups ,ideas and philosophy !</p>
      </div>

      {/* Social media */}
      <div className="flex md:flex-row flex-col items-center justify-center md:mt-0 mt-6 -ml-6 md:-ml-64">
        {socialMedia.map((social, index) => (
          <a key={index} href={social.link} target="_blank">
            <img
              src={social.icon}
              alt={social.id}
              className={`md:w-[60px] md:h-[60px] w-[40px] h-[40px] object-contain cursor-pointer mb-3 ${index !== socialMedia.length ? "mx-4" : "md:mx-0 mx-0"}`}
            />
          </a>
        ))}
      </div>
    </div>

    <div className={`${styles.padding} ${styles.flexCenter} flex flex-col justify-center items-center`}>
    <p className={`${styles.paragraph} mt-4 mb-0 w-full`}>Made by Kelvin Okuroemi.</p>
    <p className={`${styles.paragraph} mt-1 mb-2 w-full flex justify-center items-center`}>Copywright {date.getFullYear()} </p>
    </div>
  </section>
)

export default Footer