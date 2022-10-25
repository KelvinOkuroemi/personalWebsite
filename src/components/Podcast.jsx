import React from 'react'
import styles, { layout } from '../constants/style'

const Podcast = () => (
  <section id="podcast" className={layout.sectionReverse}>
    <a href="https://open.spotify.com/show/2apGCtkKhQJuUh4uB2bIM8" target="_blank">
        <button type="button" className={`mt-10 font-poppins font-medium text-primary outline-none text-[18px] py-4 px-6 bg-blue-gradient rounded-lg ss:hidden`}>
          Listen
        </button>
      </a>
    <p className={`${styles.paragraph} max-w-[470px] mt-5 sm:hidden`}>if we analyze what we know and what we don't know, we are literally a minuscle of knowledge. In this podcast, I blissfully identify with my boundless ignorance.</p>
    <div className={layout.sectionImgReverse}>
      <iframe src="https://giphy.com/embed/hXKlgeRJZTGMT3YnrA" width="340" height="340" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/jugendzentren-vereinwienerjugendzentren-wienerjugendzentren-hXKlgeRJZTGMT3YnrA">via GIPHY</a></p>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Thoughts of a Tiny<br className="sm:block hidden"></br> Microspec</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 hidden sm:block`}>if we analyze what we know and what we don't know, we are literally a minuscle of knowledge. In this podcast, I blissfully identify with my boundless ignorance.</p>
      <a href="https://open.spotify.com/show/2apGCtkKhQJuUh4uB2bIM8" target="_blank">
        <button type="button" className={`mt-10 font-poppins font-medium text-primary outline-none text-[18px] py-4 px-6 bg-blue-gradient rounded-lg ss:block hidden`}>
          Listen
        </button>
      </a>
    </div>

  </section>
)


export default Podcast