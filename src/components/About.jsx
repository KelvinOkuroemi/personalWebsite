import React from 'react'
import styles, { layout } from '../constants/style'
import { about } from '../constants/static'
import Button from './Button'

const AboutCard =({title,content,index})=>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== about.length -1?"mb-6":"mb-0"} feature-card`}>
    <div className={` rounded-full ${styles.flexCenter} bg-dimBlue`}>
      {/* <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" /> */}
      <div className="flex flex-1 flex-col ml-3">
        <h4 className="font-poppins text-white font-semibold text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins text-white font-normal text-[16px] leading-[24px] mb-1>{content}">{content}</p>
      </div>
    </div>
  </div>
)

const About = () => (
  <section id="features" className={`${layout.section} ml-8 ss:-mt-15`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>"The best way to live is to ask<br></br>questions."</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>I am first a loving human. Then a consciously curious technologist and developer. I started playing with code few months ago when I believed that someone like me could one day bring my ideas to life. I just want to build and build with enthusiastic people. Relatively, I possess smart business thinking and empathetic teamwork skills.
      My biggest personal advantage to becoming better is that I've realised anything can happen, but what situations become is what I make of it. 
      </p>
      <Button styles="mt-10 rounded-lg"/>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {about.map((info,index)=>(
        <AboutCard key={index} {...info} index={info.id}/>
      ))}
    </div>
  </section>
)

export default About