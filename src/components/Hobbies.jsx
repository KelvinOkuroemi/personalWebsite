import React from 'react'
import styles, { layout } from '../constants/style'
import { hobbies } from '../constants/static'
import { imageTwo } from '../assets/assets'

const Hobbies = () => (
    <section className={`${layout.sectionReverse}`}>
     <div className={layout.sectionInfo}>
      <h2 className={styles.heading3}>Hobbies</h2>
    {hobbies.map((hobby,index)=>(
        <p key={index} className={`${styles.paragraph} max-w-[470px] mt-5`}><span className={`${styles.heading4}`}>{hobby.title}</span>&nbsp; {hobby.content}</p>
    ))}
    </div>
    <div className={`${layout.sectionImg} sm:block hidden`}>
       <img src={imageTwo} alt="joyful buddhist picture" className="w-[90%] mt-24 h-[80%] object-contain rounded-lg relative ml-24"/>
    </div>
  </section>
)
 export default Hobbies