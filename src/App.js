import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './comp/Navbar';
import News from './comp/News';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
    <Navbar/>
   

    <News  pageSize={12} country = "in" category = "general" />
    <Routes>
     {/* <Route path="/" element={ }/>
     <Route path="business" element={ <News pageSize={12} country = "in" category = "business" />}/>
     <Route path="/entertainment" element={ <News pageSize={12} country = "in" category = "entertainment" />}/>
     <Route path="/general" element={ <News pageSize={12} country = "in" category = "general" />}/>
     <Route path="/health" element={ <News pageSize={12} country = "in" category = "health" />}/>
     <Route path="/science" element={ <News pageSize={12} country = "in" category = "science" />}/>
     <Route path="/sports" element={ <News pageSize={12} country = "in" category = "sports" />}/>
     <Route path="/technology" element={ <News pageSize={12} country = "in" category = "technology" />}/> */}
    </Routes>
      </div>
     </BrowserRouter>
    )
  }
}

