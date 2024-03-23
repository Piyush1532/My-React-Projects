import React from 'react'

const newsNavbar = ({setcategorys}) => {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg  navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><span className='badge bg-primary'>Inews</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="nav-link active" aria-current="page" href="#" onClick={()=>setcategorys("general")}>Home</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={()=>setcategorys("technology")}>Technology</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={()=>setcategorys("entertainment")}>Entertainment</div>
          </li>
          <li className="nav-item">
            <div className="nav-link"onClick={()=>setcategorys("sports")}>Sports</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={()=>setcategorys("business")}>Business</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={()=>setcategorys("science")}>Science</div>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default newsNavbar

//paste in App.js for Newsproject
// const [category,setcategorys]=useState("general")
{/* <NewsNav setcategorys={setcategorys} />   
<NewsBoard category={category}/> */}