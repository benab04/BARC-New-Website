import React, { Component } from "react";
import "./Preloader.css";
import "./load.js";
import "../Hero/hero"

class Preloader extends Component {
  
  preloader() {
    let video = document.getElementById('myVideo');
    // const preloader = document.querySelector('.preloader');
// const loadingPercentage = document.querySelector('.loading-percentage');

let preload = document.querySelector(".preloader");

setTimeout(() => {
  preload.style.opacity = "0";
  setTimeout(() => {
    preload.style.display = "none";
  }, 1000);
}, 10000);
    video.addEventListener('canplaythrough', () => {
      // Video is loaded
      
      setTimeout(() => {
        preload.style.opacity = "0";
        setTimeout(() => {
          preload.style.display = "none";
        }, 1000);
      }, 1500);
      // preloader.style.display = 'none'; // Hide the preloader
      
    });
    
   
   
   
    video.addEventListener('progress', () => {

      video.onloadedmetadata = function() {
     
      const buffered = video.buffered.length > 0 ? video.buffered.end(0) : 0;
        const total = this.duration;
      
        const loadProgress = buffered / total;
        const percentage = Math.floor(loadProgress * 100);
      
        // loadingPercentage.style.width = `${percentage}`;
        // loadingPercentage.textContent = `${percentage}%`;
    };
      });
}

  componentDidMount() {
    this.preloader();
  }


  render() {
    return (
      
      <div className="preloader">
      
        <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
        </div>
    
    );
  }
}

export default Preloader;
