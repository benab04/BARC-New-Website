import "./Teams.css";
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

function Teams() {
  
  const gensecdata =[
    {
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
        name: "Akshat Sharma",
        img: "./SM/dummy.jpg",
        pos: "Student Member"
    },
    {
        name: "Akshil Jain",
        img: "path/to/akshil_jain_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Amogh Ubhalkar",
        img: "path/to/amogh_ubhalkar_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Aniket Thakare",
        img: "path/to/aniket_thakare_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Ansh Murarka",
        img: "path/to/ansh_murarka_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Anup Kumar",
        img: "path/to/anup_kumar_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Anushika Srivastava",
        img: "path/to/anushika_srivastava_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Anvesh Rajguru",
        img: "path/to/anvesh_rajguru_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Aryal Katkar",
        img: "path/to/aryal_katkar_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Asmit Srivastava",
        img: "path/to/asmit_srivastava_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Ben Abraham Biju",
        img: "path/to/ben_abraham_biju_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Chavi Agarwal",
        img: "path/to/chavi_agarwal_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Devika K V",
        img: "path/to/devika_kv_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Dhruv Rai",
        img: "path/to/dhruv_rai_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Harshdeep Mili",
        img: "path/to/harshdeep_mili_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Jatain Kumar",
        img: "path/to/jatain_kumar_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Gnaneswar Karakavalasa",
        img: "path/to/gnaneswar_karakavalasa_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Konduri Jeevan Varma",
        img: "path/to/konduri_jeevan_varma_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Manash Shit",
        img: "path/to/manash_shit_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Mohit Pant",
        img: "path/to/mohit_pant_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Nikhil Yadav",
        img: "path/to/nikhil_yadav_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Pranay Anil Darode",
        img: "path/to/pranay_anil_darode_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Priyadarshi Shaket",
        img: "path/to/priyadarshi_shaket_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Raj Aryan",
        img: "path/to/raj_aryan_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Ranjeeta Mashal",
        img: "path/to/ranjeeta_mashal_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Rathlavath Omprakash",
        img: "path/to/rathlavath_omprakash_img.jpg",
        pos: "Student Member"
    },
    {
        name: "S Praneeth Kumar",
        img: "path/to/s_praneeth_kumar_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Sai Vishwas Aluvala",
        img: "path/to/sai_vishwas_aluvala_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Satyam Jayswal",
        img: "path/to/satyam_jayswal_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Shubham Pingale",
        img: "path/to/shubham_pingale_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Mohite Swara Nandkishor",
        img: "path/to/mohite_swara_nandkishor_img.jpg",
        pos: "Student Member"
    },
    {
        name: "B. Uma Chandra Shekar Naik",
        img: "path/to/uma_chandrashekhar_naik_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Vaibhav Chakole",
        img: "path/to/vaibhav_chakole_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Snehal Tengse",
        img: "path/to/snehal_tengse_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Ujjwal Kumar",
        img: "path/to/ujjwal_kumar_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Raghav Kishore",
        img: "path/to/raghav_kishore_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Ananya Sikdar",
        img: "path/to/ananya_sikdar_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Pragya Bhootra",
        img: "path/to/pragya_bhootra_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Pradnya Ukey",
        img: "path/to/pradnya_ukey_img.jpg",
        pos: "Student Member"
    },
    {
        name: "Madipelli Sreetham",
        img: "path/to/madipelli_sreetham_img.jpg",
        pos: "Student Member"
    }
];
  
  return (
    <>

      {/* //navbar here */}
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
                       
                         className="head-img" src={ele.img} ></motion.img>
                        <ul className="social-team">
                          <li><a  href={ele.fb} target="_blank" rel="noreferrer"><i className="fab fa-facebook" ></i></a></li>
                          <li><a href={"https://mail.google.com/mail/?view=cm&fs=1&to="+ele.mail} target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                          <li><a href={ele.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin" ></i></a></li>
                          {/* <li><a href={ele.insta}><i className="fab fa-instagram" target="_blank"></i></a></li> */}
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
                        <motion.img  className="head-img" src={ele.img} ></motion.img>
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
            <h3 className="team-title" style={{color:"#08707f", fontFamily:"Raleway,sans-serif",marginBottom:"4rem",marginTop:"5rem"}}>STUDENT MEMBERS</h3>
            <div className="row">
              {studData.map((ele, i) => {
                console.log(ele.img)
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

export default Teams;