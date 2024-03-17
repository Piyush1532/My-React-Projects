import React, {  memo, useState } from 'react'
import "./loginsignup.css"

const LoginSignup = () => {
    const [action, setaction] = useState("Sign up")
    console.log("rendered"+1);
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputfields">
            {action==="Login"?<div></div>:    <div className="input">
                <img src={"https://cdn-icons-png.flaticon.com/512/1077/1077114.png"} alt="" />
                <input type="text"  placeholder='Name'/>
            </div>}
        
            <div className="input">
                <img src={"https://cdn-icons-png.flaticon.com/256/3178/3178158.png"} alt="" />
                <input type="email" placeholder='Email Id' />
            </div>
            <div className="input">
                <img src={"https://static.vecteezy.com/system/resources/previews/012/675/310/non_2x/lock-icon-clipart-free-png.png"} alt="" />
                <input type="password"  placeholder='Password'/>
            </div>
        </div>
        {action==="Sign up"?<div></div>: <div className="forgotpass">LostPassword <span>Click here</span></div>}
        <div className="submit-container">
            <div className={action==="Login"? "submit gray":"submit"} onClick={()=>setaction("Sign up")}>SignUp</div>
            <div className={action==="Sign up"?"submit gray":"submit"} onClick={()=>setaction("Login")}>Login</div>
        </div>
    </div>
  )
}

export default memo(LoginSignup)