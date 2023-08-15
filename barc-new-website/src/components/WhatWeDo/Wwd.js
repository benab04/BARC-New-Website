import { useState, useEffect } from 'react';
import './Wwd.css';
import img1 from './tranding-food-1.png';
import img2 from './tranding-food-2.png';
import img3 from './tranding-food-3.png';

function WWD() {
  const [bgimg, setbgimg] = useState(img1)
  return (
    <section id="what-we-do">
    <div className="container-fluid  row col-md-12 text-center wwd-wrap" >
      <h1 className='wwd-title'>What We Do</h1>
      <div class="container col-md-4 col-xs-4 my-3 " id='con1'>
        <div class="card">
          <div class="front text-center">
          <img src={img1} alt="img1" />
            <div className="text">UG Achievers Directory</div>
          </div>
          <div class="back text-center">
            <p>The Branding and Relations Cell's UG Achievers Directory (UGAD) initiative aims to highlight IIT Kharagpur students who have accomplished notable achievements during a particular academic year. The official IIT Kharagpur website features UGAD.</p>
          </div>
        </div>
      </div>
      <div class="container col-md-4 col-xs-4 my-3" id='con2'>
        <div class="card">
          <div class="front text-center">
            <img src={img2} alt="img1" />
            <div className="text">Young Innovator's Program</div>
            </div>
          <div class="back text-center">
            <p>Young Innovator's Program is a platform to foster young minds with scientific enthusiasm and a credo to solve the problems facing the globe. In a two day visit to IIT Kharagpur, the students will get a chance to explore the scientific environment within and an opportunity to present their projects in front of distinguished researches and guests.</p>
          </div>
        </div>
      </div>
      <div class="container col-md-4 col-xs-4 my-3" id='con3'>
        <div class="card">
          <div class="front text-center col">
            <img src={img3} alt="img1" />
            <div className="text">Spotlight</div>
          </div>
          <div class="back text-center" >
            <p>The Branding and Relations Cell has launched a ‘Spotlight’ initiative for IIT Kharagpur students, allowing students to highlight their accomplishments and awards. In the Spotlight series, the achievements of students in the fields of sports, academics, technology, sociocultural activities, and work in the field of public welfare are highlighted.</p>
          </div>
        </div>
      </div>
    </div>
</section>
  );
}

export default WWD;
