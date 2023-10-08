import "./Teams.css";

import { gensecdata,headsData,aish } from "./Heads";
import studData from "./StudentMembers";
import {motion} from "framer-motion";

function Teams() {
    
  return (
    <>

      <section id="team">
      <img id="test-img" src={aish} style={{width:"0",height:"0",opacity:"0"}}/>
      <h1 className="team-title text-center" style={{color:"#08707f",fontSize:"3rem", fontFamily:"Raleway,sans-serif"}}>OUR PEOPLE</h1>
      <div className="demo">
        <div className="container text-center">
          <h3 className=" team-title senior-title" style={{color:"#08707f"}}><span style={{fontFamily:"Raleway,sans-serif"}}>EXECUTIVE TEAM </span>2023</h3>
          <div className="row d-flex justify-content-center align-items-center">
            {gensecdata.map((ele, i) => {
              return (
                <>
                  <div className=" col-lg-4 col-md-6 my-4 col-sm-6  " >
                    <div className="our-team">
                      <motion.div 
                       className="team_img">
                        <motion.img 
                        className="head-img" src={ele.img} 
                        ></motion.img>
                        <ul className="social-team">
                          <li><a  href={ele.fb} target="_blank" rel="noreferrer"><i className="fab fa-facebook" ></i></a></li>
                          <li><a href={"https://mail.google.com/mail/?view=cm&fs=1&to="+ele.mail} target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                          <li><a href={ele.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin" ></i></a></li>
                          <li><a href={"tel:" + ele.contact} target="_blank" rel="noreferrer"><i className="fa fa-mobile" ></i></a></li>
                        </ul>
                      </motion.div>
                      <div className="team-content">
                        <h3 className="team-title">{ele.name}</h3>
                        <span style={{color:"red "}} className="post">{ele.pos}</span>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
            </div>


          <div className="row">
            {headsData.map((ele, i) => {
         
              return (
                <>
                  <div className=" col-lg-4 col-md-6 my-4 col-sm-6 ">
                    <div className="our-team">
                      <div className="team_img">
                        <motion.img  className="head-img" src={ele.img} ></motion.img>
                        <ul className="social-team">
                          <li><a href={ele.fb} target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
                          <li><a href={"https://mail.google.com/mail/?view=cm&fs=1&to="+ele.mail} target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                          <li><a href={ele.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin" ></i></a></li>
                          <li><a href={"tel:" + ele.contact} target="_blank" rel="noreferrer"><i className="fa fa-mobile" ></i></a></li>
                        </ul>
                      </div>
                      <div className="team-content">
                        <h3 className="team-title">{ele.name}</h3>
                        <span style={{color:"red "}} className="post">{ele.pos}</span>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
            
          </div>
            <h3 className="team-title" style={{color:"#08707f", fontFamily:"Raleway,sans-serif",marginBottom:"4rem",marginTop:"5rem"}}>STUDENT MEMBERS</h3>
            <div className="row">
              {studData.map((ele, i) => {
                console.log(ele.img)
            
                return (
                  <>
                    <div className="studmemb row col-lg-5 col-md-7 my-4 col-sm-5 d-flex align-items-center card_ mx-auto"  style={{borderRadius:"20px"}}>
                      <motion.div whileHover={{scale:1.2}} className="col-md-4 col-sm-4 pfp">
                      <img style={{border:"solid #62466b 4px"}} alt={ele.pos} className="smimage" src={ele.img}></img>
                      </motion.div>
                      <div className="card-body col-md-8 col-sm-8">
                        <h4 className="card-title my-2" style={{color:"white", fontFamily:"Raleway,sans-serif"}}>{ele.name}</h4>
                       
                      </div>
                    </div>
                  </>
                )
              })}
            </div>



        </div>
      </div>
      </section>
           
    </>
  );
}

export default Teams;