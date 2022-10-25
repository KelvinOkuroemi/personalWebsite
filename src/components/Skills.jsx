import React from 'react'
import { skills } from '../constants/static'
import styles from '../constants/style'

const Skills = () => (
  <div>
    <div className={`${styles.flexCenter} ss:-mt-24 ss:mb-4 mt-5 mb-3`}>
      <h4 className="font-poppins font-semibold xs:text-[40px] text-[23px] xs:leading-[53px] leading-[43px] text-white uppercase ss:mx-3">Tech Stack</h4>
    </div>
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {skills.map((skill) => (
        <div key={skill.id} className={`flex justify-start items-center flex-row m-3`}>
          <p className="font-poppins font-semibold xs:text-[40px] text-[23px] xs:leading-[53px] leading-[43px] text-gradient uppercase ss:mx-3">{skill.title}</p>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-white text-center ss:-my-7 ss:ml-0 ml-2">{skill.value}</p>
        </div>
      ))}
    </section>
  </div>

)

export default Skills