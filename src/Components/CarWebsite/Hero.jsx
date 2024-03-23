import React from 'react'
import "./css/hero.css"
import arrow_btn from "./Assets/arrow_btn.png"
import play_icon from "./Assets/play_icon.png"
import pause_icon from "./Assets/pause_icon.png"
const Hero = ({heroData,setheroCount,heroCount,playStatus,setplayStatus}) => {
  return (
    <div className='hero'>
      <div className="herotxt">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn}  />
      </div>
      <div className="hero-play">
        <ul className="hero-dots">
          <li onClick={()=>setheroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setheroCount(1)}  className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setheroCount(2)}  className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
        </ul>
        <div className="heroPlay">
          <img onClick={()=>setplayStatus(!playStatus)} src={playStatus?pause_icon:play_icon}alt="" />
          <p>See the Video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero