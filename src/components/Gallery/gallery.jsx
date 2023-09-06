import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import ImageGallery from "react-image-gallery";

import 'react-image-gallery/styles/css/image-gallery.css';

import "./gallery.css";
import Img1 from "./Images/2018_A.jpg"
import Img2 from "./Images/2018_B.jpg"
import Img3 from "./Images/2018_C.jpg"
import Img4 from "./Images/2018_D.jpg"
import Img5 from "./Images/2019_A.jpg"
import Img6 from "./Images/2019_B.jpg"
import Img7 from "./Images/2019_C.jpg"
import Img8 from "./Images/2019_D.jpg"
import Img9 from "./Images/2022_A.jpg"
import Img10 from "./Images/2022_B.jpg"
import Img11 from "./Images/2022_C.jpg"
import Img12 from "./Images/2022_D.jpg"
import Img13 from "./Images/2022_E.jpg"
import Img14 from "./Images/2022_F.jpg"




// class MyComponent extends React.Component {
//   render() {
    const images = [
      {
        original: Img9,
        thumbnail: Img9
      },
      {
        original: Img10,
        thumbnail: Img10
      },
     
      {
        original: Img12,
        thumbnail: Img12
      },
      {
        original: Img13,
        thumbnail: Img13
      },
      {
        original: Img11,
        thumbnail: Img11
      },
      {
        original: Img14,
        thumbnail: Img14
      },
      {
        original: Img1,
        thumbnail: Img1
      },
      {
        original: Img2,
        thumbnail: Img2
      },
      {
        original: Img3,
        thumbnail: Img3
      },
      {
        original: Img4,
        thumbnail: Img4
      },
      // {
      //   original: Img5,
      //   thumbnail: Img5
      // },
      // {
      //   original: Img6,
      //   thumbnail: Img6
      // },
      // {
      //   original: Img7,
      //   thumbnail: Img7
      // },
      {
        original:Img8,
        thumbnail:Img8
      }
    ];
function Gallery(){
  const galleryRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37) {
        // Left arrow key
        galleryRef.current.slideLeft();
      } else if (event.keyCode === 39) {
        // Right arrow key
        galleryRef.current.slideRight();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

    return (
        <section id="gallery" >
        <div className="gallery-page">
        <h1 className="gallery-title my-2">GALLERY</h1>
        <div className="gallery-slides my-5">
      <ImageGallery
        ref={galleryRef}
        items={images}
        showBullets={true}
        showIndex={false}
        showThumbnails={false}
        lazyLoad={false}
        showPlayButton={true}
        showNav={true}
        showFullscreenButton={true}
        thumbnailPosition={"bottom"}
        
        // useTranslate3D={false}
        autoPlay={true} 
      />
      </div>
      </div>
      </section>
    );
}
//   }
// }
export default Gallery;
