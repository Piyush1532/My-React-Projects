import React from "react";
import "./css/background.css";
import video1 from "./Assets/video1.mp4";
import image1 from "./Assets/image1.png";
import image2 from "./Assets/image2.png";
import image3 from "./Assets/image3.png";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className="background fade-in" />;
  } 
  else if (heroCount === 1) {
    return <img src={image2} className="background fade-in" />;
  } 
  else if (heroCount === 2) {
    return <img src={image3} className="background fade-in" />;
  }
};

export default Background;




{/* <Background playStatus={playStatus} heroCount={heroCount}/>
<Navbar/> */}
{/* <Hero setplayStatus={setplayStatus} heroData={heroData[heroCount]} heroCount={heroCount} setheroCount={setheroCount} playStatus={playStatus}/> */}

//paste in app.js
// let heroData=[
//   {text1:"Dive into",text2:"What you love"},
//   {text1:"Indulge",text2:"your passions"},
//   {text1:"Give in to",text2:"your passions"}
// ]

// const [heroCount, setheroCount] = useState(0)
// const [playStatus, setplayStatus] = useState(false)

// useEffect(()=>{
// setInterval(() => {
//   setheroCount((count)=>{
//     return count===2?0:count+1
//   })
// }, 3000);
// },[])
