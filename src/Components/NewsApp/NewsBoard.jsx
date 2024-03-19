import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems';

const NewsBoard = ({category}) => {
   const [articles,setarticles]=useState([])

   let getData=async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=51663eacf9ad40e4951abc9e41bbf44e`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const convertdata = await response.json();
      // console.log(convertdata);
  setarticles(convertdata.articles)
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 
   useEffect(()=>{
getData()
   },[category])
  return (
    <div>
      <h2 className='text-center mt-2'>Latest <span className='badge bg-danger'>News</span></h2>

{articles.map((news,index)=>{
    
    return <NewsItems key={index} title={news.title} description={news.description} urlToImage={news.urlToImage} url={news.url}/>
     
 
       })}

     
    </div>
  
  )
}

export default NewsBoard