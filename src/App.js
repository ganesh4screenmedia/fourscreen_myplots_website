import React from 'react'
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from './Router';


 const App = function() {
  return <BrowserRouter>
    <Router />
    </BrowserRouter>
}



export default App;
