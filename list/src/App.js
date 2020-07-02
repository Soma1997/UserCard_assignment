import React from 'react';
import './App.css';
import ToList from './components/mylist/tolist';
import PublicCards from './components/public_card/public_card';
import {Route}  from 'react-router-dom';
const App=()=>{
  return(
  <div>
     <Route path="/List" render={()=><ToList/>}/> 
     <Route exact path ="/" render={()=><PublicCards/>}/>
     
  </div>
);
  }

export default App;
