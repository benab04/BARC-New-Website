import "./Teams.css";
//import navbar
//import footer
import img1 from './DeepakSomani.jpg';
import aish from './Heads/aish.jpg'
import bhumi from './Heads/bhumi.jpg'
import bhoumik from './Heads/bhoumik.jpg'
import aadit from './Heads/aadit.png'
import komal from './Heads/komal.jpg'
import abhi from './Heads/abhi.jpeg'
import shrnsh from './Heads/sharansh.jpg'
import ajay from './Heads/ajay.png'

import {motion} from "framer-motion";



function contactus() {
  const gensecdata =[
    {
      // src: require("assets/img/denys.jpg"),
      img: aish,
      name: "Aishwary Patel",
      pos: "General Secretary",
      fb: "https://www.facebook.com/profile.php?id=100074647653881",
      insta: 'https://www.instagram.com/w3.aish.in/',
       linkedin: "https://www.linkedin.com/in/aishwary-patel-976298226",
      contact: "9630271203",
      mail:"aishwarypatel2004@gmail.com"
    },
    {
      // src: require("assets/img/denys.jpg"),
      img: bhumi,
      name: "Bhumi Tayal",
      pos: "General Secretary",
      fb: "https://www.facebook.com/people/Bhumi-Tayal/100074774606356/",
      linkedin: "https://www.linkedin.com/in/bhumi-tayal-725913226/",
      contact: "7684067297",
      mail:"tayalbhumi8@gmail.com"
    }
  ]
  const headsData = [

    
    
    {
      // src: require("assets/img/denys.jpg"),
      name: "Aadit Shah",
      img: aadit,
      pos: "Senior Coordinator",
      fb: "https://www.facebook.com/aadit.shah.94?mibextid=LQQJ4d",
      linkedin: "https://www.linkedin.com/in/aadit-shah-6b291022a",
      contact: "9819250603",
      mail:"shahaadit03@gmail.com"
    },
    {
      // src: require("assets/img/denys.jpg"),
      img: bhoumik,
      name: "Bhoumik Mhatre",
      pos: "Senior Coordinator",
      fb: "https://www.facebook.com/bhoumik.mhatre.1",
      linkedin: "https://www.linkedin.com/in/bhoumik-mhatre-5396b623a/",
      contact: "8087562959",
      mail:"bhoumikmhatre@gmail.com"
    },
    {
      // src: require("assets/img/denys.jpg"),
      name: "Komal Arya",
      img: komal,
      pos: "Senior Coordinator",
      fb: "https://www.facebook.com/komal.arya.7359447",
      linkedin: "https://www.linkedin.com/in/komal-arya-381b0822b",
      contact: "9102515688",
      mail:"komalarya776@gmail.com"
    },
     {
      // src: require("assets/img/denys.jpg"),
      name: "Sharansh Vardhan",
      pos: "Senior Coordinator",
      img: shrnsh,
      fb: "https://www.facebook.com/profile.php?id=100023522052604&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/sharansh-vardhan-289ba9248/",
      contact: "6376339863",
      mail:"ankitkumar18175468@gmail.com"
    },
    {
      // src: require("assets/img/denys.jpg"),
      name: "Abhishek Tiwari",
      img: abhi,
      pos: "Graphics Design Coordinator",
      fb: "https://www.facebook.com/profile.php?id=100036010306556&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/abhishek-tiwari-5608b21a3",
      contact: "7489808207",
      mail:"Abhishekpk120@gmail.com"
    },

   
    {
      // src: require("assets/img/denys.jpg"),
      name: "Ajay Biswas",
      pos: "Web Design Coordinator",
      img: ajay,
      fb: "https://www.facebook.com/profile.php?id=100074748354912",
      insta: 'https://www.instagram.com/blue_sq4/',
      linkedin: "https://www.linkedin.com/in/ajay-biswas-8b0832237/",
      mail: "ajaybiswas44442019@gmail.com",
      contact: "7008454709"
    }
  ];

  const studData = [
    {
      img: img1,
      name: "Aadit Shah",
      pos: "Student Member",
      fb: "https://www.facebook.com/aadit.shah.94?mibextid=LQQJ4d",
      linkedin: "https://www.linkedin.com/in/aadit-shah-6b291022a",
      contact: "9819250603",
      mail:"shahaadit03@gmail.com"
    },
    {
      img:img1,
      name: "Abhirup Pal",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100075401053606",
      linkedin: "https://www.linkedin.com/in/abhirup-pal-bab956224/",
      contact: "9875303263",
      mail:"abhiruppal2804@gmail.com"
    },
    {
      img: img1,
      name: "Abhishek Tiwari",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100036010306556&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/abhishek-tiwari-5608b21a3",
      contact: "7489808207",
      mail:"Abhishekpk120@gmail.com"
    },
    {
      img: img1,
      name: "Aditya Sharma ",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100002888868638&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/aditya-sharma-356671233",
      contact: "7014493349",
      mail:"adityasharmakn@gmail.com"
    },
    {
      img: img1,
      name: "Aishwary Patel",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100074647653881&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/aishwary-patel-976298226",
      contact: "9630271203",
      mail:"aishwarypatel2004@gmail.com"
    },
    {
      img: img1,
      name: "Archie Avirati",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100074750037795&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/archie-avirati-406338224",
      contact: "7024385271",
      mail:"aviratiarchie@gmail.com"
    },
    {
      img: img1,
      name: "Ayush Sunil Munot ",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100075329244988",
      linkedin: "https://www.linkedin.com/in/ayush-munot-5b4963223",
      contact: "9890079441",
      mail:"munotayush6@gmail.com "
    },
    {
      img: img1,
      name: "Bhoumik Mhatre",
      pos: "Student Member",
      fb: "https://www.facebook.com/bhoumik.mhatre.1",
      linkedin: "https://www.linkedin.com/in/bhoumik-mhatre-5396b623a/",
      contact: "8087562959",
      mail:"bhoumikmhatre@gmail.com"
    },
    {
      img: img1,
      name: "Bhumi Tayal",
      pos: "Student Member",
      fb: "https://www.facebook.com/people/Bhumi-Tayal/100074774606356/",
      linkedin: "https://www.linkedin.com/in/bhumi-tayal-725913226/",
      contact: "7684067297",
      mail:"tayalbhumi8@gmail.com"
    },
    {
      img: img1,
      name: "Dommeti Chaitanya Srinivas",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100076109945148&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/chaitanya-srinivas-41559323b",
      contact: "8074797345",
      mail:"chaitanyads127@gmail.com"
    },
    {
      img: img1,
      name: "Komal Arya",
      pos: "Student Member",
      fb: "https://www.facebook.com/komal.arya.7359447",
      linkedin: "https://www.linkedin.com/in/komal-arya-381b0822b",
      contact: "9102515688",
      mail:"komalarya776@gmail.com"
    },
    {
      img: img1,
      name: "Pahnabi Roy",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100080970711338&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/pahnabi-roy-8a8a1b234/",
      contact: "8100537502",
      mail:"roypahnabi@gmail.com"
    },
    {
      img: img1,
      name: "Pratham Gupta",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100048664521001",
      linkedin: "https://www.linkedin.com/in/pratham-gupta-80bb08223/",
      contact: "7505259662",
      mail:"prathamgupta717@gmail.com"
    },
    {
      img: img1,
      name: "Sharansh vardhan",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100023522052604&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/sharansh-vardhan-289ba9248/",
      contact: "6376339863",
      mail:"ankitkumar18175468@gmail.com"
    },
    {
      img: img1,
      name: "Vishal Arya",
      pos: "Student Member",
      fb: "https://www.facebook.com/vishal.arya.92351995?mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/vishal-arya-1ab87a23a",
      contact: "7827523608",
      mail:"aryav7196@gmail.com"
    },
    {
      img: img1,
      name: "Vishal Saraswat",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100075526327320&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/vishal-saraswat-604baa224",
      contact: "6354116363",
      mail:"saraswatvishal007@gmail.com"
    }
  ]
  return (
    <>
      {/* //navbar here */}
      <section id="team">
      <h1 className="team-title text-center" style={{color:"#08707f",fontSize:"3rem", fontFamily:"Raleway,sans-serif"}}>OUR PEOPLE</h1>
      <div className="demo">
        <div className="container text-center">
          <h3 className=" team-title senior-title" style={{color:"#08707f"}}>HEAD TEAM 2023</h3>
          <div className="row d-flex justify-content-center align-items-center">
            {gensecdata.map((ele, i) => {
              return (
                <>
                  <div className=" col-lg-4 col-md-6 my-4 col-sm-6  " >
                    <div className="our-team">
                      <div className="team_img">
                        <motion.img whileHover={{scale:1.1}} className="head-img" src={ele.img} ></motion.img>
                        <ul className="social-team">
                          <li><a  href={ele.fb} target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
                          <li><a href={"https://mail.google.com/mail/?view=cm&fs=1&to="+ele.mail} target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                          <li><a href={ele.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin" ></i></a></li>
                          {/* <li><a href={ele.insta}><i className="fab fa-instagram" target="_blank"></i></a></li> */}
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

{/* 
            <div className="d-flex justify-content-center align-items-center">
            <div className=" col-lg-4 col-md-6 my-4 col-sm-6 " >
                    <div className="our-team">
                      <div className="team_img">
                        <motion.img whileHover={{scale:1.1}} className="head-img" src={gensecdata[0].img} ></motion.img>
                        <ul className="social-team">
                          <li><a href={gensecdata[0].fb} target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
                          <li><a href={"https://mail.google.com/mail/?view=cm&fs=1&to="+gensecdata[0].mail} target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                          <li><a href={gensecdata[0].linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin" ></i></a></li>
                          <li><a href={ele.insta}><i className="fab fa-instagram" target="_blank"></i></a></li>
                          <li><a href={"tel:" + gensecdata[0].contact} target="_blank" rel="noreferrer"><i className="fa fa-mobile" ></i></a></li>
                        </ul>
                      </div>
                      <div className="team-content">
                        <h3 className="team-title">{gensecdata[0].name}</h3>
                        <span className="post">{gensecdata[0].pos}</span>
                      </div>
                    </div>
                  </div>
         

          <div className=" col-lg-4 col-md-6 my-4 col-sm-6" >
                    <div className="our-team">
                      <div className="team_img">
                        <motion.img whileHover={{scale:1.1}} className="head-img" src={gensecdata[1].img} ></motion.img>
                        <ul className="social-team">
                          <li><a href={gensecdata[1].fb} target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
                          <li><a href={"https://mail.google.com/mail/?view=cm&fs=1&to="+gensecdata[1].mail} target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                          <li><a href={gensecdata[1].linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin" ></i></a></li>
                          <li><a href={ele.insta}><i className="fab fa-instagram" target="_blank"></i></a></li>
                          <li><a href={"tel:" + gensecdata[1].contact} target="_blank" rel="noreferrer"><i className="fa fa-mobile" ></i></a></li>
                        </ul>
                      </div>
                      <div className="team-content">
                        <h3 className="team-title">{gensecdata[1].name}</h3>
                        <span className="post">{gensecdata[1].pos}</span>
                      </div>
                    </div>
                  </div>

                </div> */}
          <div className="row">
            {headsData.map((ele, i) => {
              return (
                <>
                  <div className=" col-lg-4 col-md-6 my-4 col-sm-6 ">
                    <div className="our-team">
                      <div className="team_img">
                        <motion.img whileHover={{scale:1.1}} className="head-img" src={ele.img} ></motion.img>
                        <ul className="social-team">
                          <li><a href={ele.fb} target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
                          <li><a href={"https://mail.google.com/mail/?view=cm&fs=1&to="+ele.mail} target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                          <li><a href={ele.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin" ></i></a></li>
                          {/* <li><a href={ele.insta}><i className="fab fa-instagram" target="_blank"></i></a></li> */}
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
            <h3 className="team-title" style={{color:"#08707f", fontFamily:"Raleway,sans-serif"}}>STUDENT MEMBERS</h3>
            <div className="row">
              {studData.map((ele, i) => {
                {/* let contfactLink = "tel:" + ele.contact; */}
                return (
                  <>
                    <div className="studmemb row col-lg-5 col-md-7 my-4 col-sm-5 d-flex align-items-center card_ mx-auto"  style={{borderRadius:"20px"}}>
                      <motion.div whileHover={{scale:1.2}} className="col-md-4 col-sm-4 pfp">
                      <img style={{border:"solid #62466b 4px"}} alt={ele.pos} className="smimage" src={ele.img}></img>
                      </motion.div>
                      <div className="card-body col-md-8 col-sm-8">
                        <h4 className="card-title my-2" style={{color:"white", fontFamily:"Raleway,sans-serif"}}>{ele.name}</h4>
                        {/* <h6 className="card-subtitle mb-2 text-muted">{ele.pos}</h6> */}
                        {/* <a href={ele.fb} className="card-link mx-2" target="_blank" rel="noreferrer"><i className="fab fa-facebook" /></a>
                        <a href={"https://mail.google.com/mail/?view=cm&fs=1&to="+ele.mail} className="card-link mx-2" target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a>
                        <a href={contactLink} className="card-link mx-2" target="_blank" rel="noreferrer"><i className="fa fa-mobile "/></a>
                        <a href={ele.linkedin} className="card-link mx-2" target="_blank" rel="noreferrer"><i className="fab fa-linkedin "/></a> */}
                      </div>
                    </div>
                  </>
                )
              })}
            </div>



        </div>
      </div>
      </section>
              {/* //footer */}
    </>
  );
}

export default contactus;