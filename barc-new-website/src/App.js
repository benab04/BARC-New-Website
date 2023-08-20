// import logo from './logo.svg';
import React from "react";

import Hero from "./components/Hero/hero";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/About/AboutUs";
import WhatWeDo from "./components/WhatWeDo/Wwd";
import Contact from "./components/Contact/ContactUs";
import Testimonials from "./components/Testimonials/testimonials";
import Preloader from "./components/Preloader/Preloader";
import Gallery from "./components/Gallery/gallery";
// import Team from "./components/Team/Teams";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TeamsApp from "./components/Team/TeamsApp";
function App(){
  return (
  <div>  
  <Preloader />
  <Navbar />
  <Hero />
  <AboutUs />
  <WhatWeDo />
  <Testimonials />
  <Gallery /> 
   <TeamsApp/> 
   <Contact /> 
  </div>
  );
}

export default App;
