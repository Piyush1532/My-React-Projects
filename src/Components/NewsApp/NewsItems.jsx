import React from 'react'

const NewsItems = ({title,description,urlToImage,url}) => {
  return (
    <div>
      <div className="container">
      <div className="row">
      <div className='col-md-3'>
      <div className=" card bg-dark text-light mx-2 my-4 py-2 px-2" style={{width:"340px"}}>
  <img src={urlToImage}  style={{height:"35vh",width:"100%"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,45)}</h5>
    <p className="card-text">{description?description.slice(0,45):"News events getting information wait...."}</p>
    <a href={url} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
      </div>
      </div>
  
  
   
      </div>
  )
}

export default NewsItems