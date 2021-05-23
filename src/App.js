import './App.css';

import HomePage from './HomePage/HomePage';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Login/Login';
import FullBlog from './FullBlog/FullBlog';
import Compo from './Compo/Compo';
import Train from './Train/Train';





function App() {
  const [comp, setComp] = useState('')
  const [title, setTitle] = useState('')
  const [post, setPost] = useState('')
  return (
    
      <Router>
      
        <Switch>
          <Route exact path="/">
                <HomePage title={title} post={post}/>
          </Route>
          <Route path='/login'>
             <Login title={title} setTitle={setTitle} post={post} setPost={setPost} />
          </Route>
          <Route path='/blog'>
            <FullBlog title={title} post={post}/>
          </Route>
          <Route path='/compo'>
            <Compo title={comp} setTitle={setComp}></Compo>
          </Route>
          <Route path='/train'>
            <Train title={comp} setTitle={setComp}/>
          </Route>
        </Switch>

      </Router>
        

  );
}


export default App;
