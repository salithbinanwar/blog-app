import React from 'react';
import './HomePage.css'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
const HomePage = (props) => {
    const {title, post} = props;
    return (
        <div className='mainPage'>
            <div className="pageCreate">
                <h1>Welcome to our blog website</h1>
                <p>Here you can express anything you like , discuss about anything and more!!</p>
                <Link className='btn btn-secondary' to='/login'>Create a blog now!!</Link>
            </div>

            <div className="row" id='carsId'>
                <div className="col-lg-4 mb-4" >
                    <div class="card container">
                        <img src="" class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{post}</p>
                            <Link to="/blog" class="btn btn-success">Check the blog</Link>
                        </div>
                    </div>
                </div>
 
                
            </div>
            <Link to="/compo" class='btn btn-danger mt-5 ml-5' >Go to experiment</Link>
        </div>
        
    );
};

export default HomePage;