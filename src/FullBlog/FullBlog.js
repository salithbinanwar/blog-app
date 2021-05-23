import React from 'react';
import './FullBlog.css'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
const FullBlog = (props) => {
    const {title, post} =props;
    return (
        <div className="blogBody">
            <div className="container ">
                <h1 className='text-center'> {title}</h1>
                <p className=''>{post}</p>
                <Link to='/' className='btn btn-secondary mt-5'> Go to home</Link>
            </div>

            
        </div>
    );
};

export default FullBlog;