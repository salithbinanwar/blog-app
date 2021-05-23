import React, { useState,useEffect } from 'react';
import './Login.css'
import {BrowserRouter as Router, Switch,Route,  Link} from "react-router-dom";
 
  

const Login = (props) => {

  const {title, setTitle} = props;
  const {post, setPost} = props;

  const handleTitle =(e)=>{

    setTitle( e.target.value)
    // console.log(e.target.value)

}
const handlePost = (e)=>{
  setPost( e.target.value)
}
    return (
      
        <div className='postBody trembo'>
            <form   className=' '>
              {/* <h1>title: {title}</h1> */}
                <input  onChange={handleTitle}  type="text" className='mb-3 postBody ' placeholder='TITLE OF YOUR BLOG 👈' />
                    <div className="row">
                    
                      <textarea className='postBody'  onChange={handlePost}  name="" id='text'  cols="40" rows="10"></textarea>  
                    
                    </div>
                    
                <Link  className="btn btn-success mt-3" to='/blog' > submit</Link>

            </form>
            
            <div className="m-5">
            <Link className='btn btn-danger' to='/blog'> go to home </Link>
            </div>
        </div>
       
    );
};

export default Login;