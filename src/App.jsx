

import { useState } from 'react'
import NewsBoard from './Components/NewsApp/NewsBoard'
import NewsNav from './Components/NewsApp/NewsNav'


function App() {
const [category,setcategorys]=useState("general")
  return (
    <>

    <NewsNav setcategorys={setcategorys} />   
    <NewsBoard category={category}/>
    </>
  )
}

export default App
