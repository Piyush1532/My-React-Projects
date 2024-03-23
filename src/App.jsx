

import { useEffect, useState } from 'react'
import Background from './Components/CarWebsite/Background'
import Navbar from './Components/CarWebsite/Navbar'
import Hero from './Components/CarWebsite/Hero'


function App() {
let heroData=[
  {text1:"Dive into",text2:"What you love"},
  {text1:"Indulge",text2:"your passions"},
  {text1:"Give in to",text2:"your passions"}
]

const [heroCount, setheroCount] = useState(0)
const [playStatus, setplayStatus] = useState(false)

useEffect(()=>{
setInterval(() => {
  setheroCount((count)=>{
    return count===2?0:count+1
  })
}, 3000);
},[])

  return (
    <>
    <Background playStatus={playStatus} heroCount={heroCount}/>
    <Navbar/>
    <Hero setplayStatus={setplayStatus} heroData={heroData[heroCount]} heroCount={heroCount} setheroCount={setheroCount} playStatus={playStatus}/>
    </>
  )
}

export default App
