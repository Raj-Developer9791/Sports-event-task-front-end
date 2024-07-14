import "./blogs.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"

// Team LOGO
import rcblogo from "../images/rcblogo.png"
import milogo from "../images/milogo.png"
import rrlogo from "../images/rrlogo.png"
import lsglogo from "../images/lsglogo.png"
import kkrlogo from "../images/kkrlogo.png"
import csklogo from "../images/csklogo.png"
import dclogo from "../images/dclogo.png"
import pklogo from "../images/pklogo.png"
import gtlogo from "../images/gtlogo.png"
import srhlogo from "../images/srhlogo.png"

// BLOGS videos

import rcb from "../video/rcb video.mp4"
import mi from "../video/mi video.mp4"
import gt from "../video/gt video.mp4"
import csk from "../video/csk video.mp4"
import dc from "../video/dc video.mp4"
import rr from "../video/rr video.mp4"
import srh from "../video/srh video.mp4"
import lsg from "../video/lsg video.mp4"
import pk from "../video/pk video.mp4"
import kkr from "../video/kkr video.mp4"



// BLOGS background image
import login from "../images/loginimage.jpg"


const img1 = {
    backgroundImage: `url(${login})`
  }
function Blogs(){
    return(
        <div>
            <div className="container-fluid pt-5 blog1 " style={img1}>
                <div className="container blog2">
                <div className="row pt-5 ps-5 blog7">
                    <div className="col">
                       <video controls autoplay  width="500px" className="rounded-3 blog6">
                            <source src={rcb} aut/>
                       </video>
                    </div>
                    <div className="col">
                        <div className="row blog5">
                            <div className="col-1 me-5"></div>
                            <div className="col ms-5"><img src={rcblogo} className="blog4"/></div>
                        </div>
                        <div className="row">
                        <p className="blog3 text-dark">
                            <b>Royal Challengers Bangalore (RCB), officially Royal Challengers Bengaluru, is a professional franchise cricket team based in 
                            Bangalore, Karnataka, playing in the Indian Premier League (IPL).The franchise was founded in 2008 by United Spirits and was 
                            named after its liquor brand Royal Challenge.The M. Chinnaswamy Stadium serves as the team's home ground.</b>
                        </p>
                        </div>
                    </div>
                </div>
                <div className="row pt-5 ps-5 blog7">
                    <div className="col">
                    <div className="row blog5">
                            <div className="col-1 me-5"></div>
                            <div className="col ms-5"><img src={milogo} className="blog4"/></div>
                        </div>
                    <div className="row">
                    <p className="blog3 text-dark">
                        Mumbai Indians are currently captained by Hardik Pandya.  Mark Boucher was appointed as head coach of Mumbai Indians before the 2023 season. 
                        Kieron Pollard is the batting coach and Lasith Malinga is their bowling coach.Rohit Sharma is the leading run scorer of the team while
                        Lasith Malinga is the leading wicket taker of the team.
                        </p>
                    </div>
                    
                    </div>
                    <div className="col ms-5">
                    <video controls autoplay className="rounded-3 blog6" width="500px">
                            <source src={mi} aut/>
                       </video>
                    </div>
                </div>
                <div className="row pt-5 ps-5 blog7">
                    <div className="col">
                    <video controls autoplay className="rounded-3 blog6" width="500px">
                            <source src={gt} aut/>
                       </video>
                    </div>
                    <div className="col">
                    <div className="row blog5">
                            <div className="col-1 me-5"></div>
                            <div className="col ms-5"><img src={gtlogo} className="blog4"/></div>
                        </div>
                    <div className="row">
                    <p className="blog3 text-dark">
                        Gujarat Titans (GT) are a professional franchise cricket team based in Ahmedabad, Gujarat, India. The Titans compete in the Indian Premier League (IPL).
                        Founded in 2021, Gujarat Titans' home ground is Narendra Modi Stadium in Motera. The franchise is owned by CVC Capital Partners. 
                        The team is currently captained by Shubman Gill,after Hardik Pandya was traded back to Mumbai Indians, and coached by Ashish Nehra.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="row pt-5 ps-5 blog7">
                    <div className="col">
                    <div className="row blog5">
                            <div className="col-1 me-5"></div>
                            <div className="col ms-5"><img src={csklogo} className="blog4"/></div>
                        </div>
                    <div className="row">
                    <p className="blog3 text-dark">
                        As the IPL 2024 season unfolds, the Chennai Super Kings (CSK) have put together a strong team under the leadership of the Young Blood Ruturaj Gaikwad.
                         They have a good mix of experienced players and young talents, aiming to perform well in the tournament.Leading the CSK batting lineup is the iconic
                        MS Dhoni, known for his calm and powerful batting. He is joined by Ruturaj Gaikwad, Ajinkya Rahane, and Devon Conway, who add depth and variety to the team’s batting.
                        </p>
                    </div>
                    </div>
                    <div className="col ms-5">
                    <video controls autoplay className="rounded-3 blog6" width="500px">
                            <source src={csk} aut/>
                       </video>
                    </div>
                </div>
                <div className="row pt-5 ps-5 blog7">
                    <div className="col">
                    <video controls autoplay className="rounded-3 blog6" width="500px">
                            <source src={dc} aut/>
                       </video>
                    </div>
                    <div className="col">
                    <div className="row blog5">
                            <div className="col-1 me-5"></div>
                            <div className="col ms-5"><img src={dclogo} className="blog4"/></div>
                        </div>
                    <div className="row">
                    <p className="blog3 text-dark">
                        he captain of Delhi Capitals, has made a strong comeback to competitive cricket in IPL 2024. Pant has been a dynamic force in the middle-order, 
                        leading by example with his attacking batting style. With a tally of 371 runs in 10 matches, he tops the orange cap list for his team.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="row pt-5 ps-5 blog7">
                    <div className="col">
                    <div className="row blog5">
                            <div className="col-1 me-5"></div>
                            <div className="col ms-5"><img src={rrlogo} className="rrlogo"/></div>
                        </div>
                    <div className="row">
                        <p className="blog3 text-dark">
                        In the exciting IPL 2024 Season, Rajasthan Royals (RR) are ready with a strong team led by Sanju Samson. They have a good mix of experienced 
                        players and rising stars, aiming to do well in this tournament.The batting side of RR looks promising with players like Sanju Samson and Jos Buttler,
                        who are known for their powerful performances. Alongside them, Shimron Hetmyer and Yashasvi Jaiswal bring consistency to the team’s batting.
                        </p>
                    </div>
                    </div>
                    <div className="col ms-5 ">
                    
                        <video controls autoplay className="rounded-3 blog6" width="500px">
                            <source src={rr} aut/>
                       </video>
                    </div>
                </div>
                <div className="row pt-5 ps-5 blog7">
                    <div className="col">
                    <video controls autoplay className="rounded-3 blog6" width="500px">
                            <source src={srh} aut/>
                       </video>
                    </div>
                    <div className="col">
                    <div className="row blog5">
                            <div className="col-1 me-5"></div>
                            <div className="col ms-5"><img src={srhlogo} className="blog4"/></div>
                        </div>
                    <div className="row">
                    <p className="blog3 text-dark">
                        In the ongoing IPL 2024 Season, all eyes are on the Sunrisers Hyderabad (SRH). Led by Pat Cummins, SRH’s team is filled with talented players 
                        who are eager to show their skills on the cricket field.With strong batters like Rahul Tripathi, Mayank Agarwal, and Glenn Phillips, SRH’s batting
                        lineup is full of power and excitement. They can set big scores and chase targets effectively.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="row pt-5 ps-5 blog7">
                    <div className="col">
                    <div className="row blog5">
                            <div className="col-1 me-5"></div>
                            <div className="col ms-5"><img src={lsglogo} className="blog4"/></div>
                        </div>
                    <div className="row">
                    <p className="blog3 text-dark">
                        The IPL 2024 Season is here, and everyone is watching the Lucknow Super Giants (LSG). KL Rahul leads this team, filled with experienced players and new talents,
                        all set to make their mark in cricket.With big hitters like Ayush Badoni, Quinton de Kock, and Nicholas Pooran, LSG’s batting lineup is exciting and strong. 
                        They can score lots of runs and chase targets confidently
                        </p>
                    </div>
                    </div>
                    <div className="col ms-5">
                    
                    <video controls autoplay className="rounded-3 blog6"width="500px">
                            <source src={lsg} aut/>
                       </video>
                    </div>
                </div>
                <div className="row pt-5 ps-5 blog7">
                    <div className="col">
                    <video controls autoplay className="rounded-3 blog6" width="500px">
                            <source src={pk} aut/>
                       </video>
                    </div>
                    <div className="col">
                    <div className="row blog5">
                            <div className="col-1 me-5"></div>
                            <div className="col ms-5"><img src={pklogo} className="blog4"/></div>
                        </div>
                    <div className="row">
                    <p className="blog3 text-dark">
                        The IPL 2024 Season is here, and Punjab Kings (PBKS) is all set with a strong team led by Sam Curran. They’ve got a good mix of experienced players 
                        and new talents, aiming to shine in the tournament.PBKS has some powerful batsmen like Shikhar Dhawan, Liam Livingstone, and Jonny Bairstow, who are known for their big hits.
                         Rilee Rossouw adds stability and strength to the batting lineup
                        </p>
                    </div>
                    </div>
                </div>
                <div className="row pt-5 ps-5 blog7">
                    <div className="col">
                    <div className="row blog5">
                            <div className="col-1 ms-5"></div>
                            <div className="col ms-5"><img src={kkrlogo} className="blog4"/></div>
                        </div>
                    <div className="row">
                    <p className="blog3 text-dark">
                        In the ongoing IPL 2024 Season, the Kolkata Knight Riders (KKR) have brought together a strong team ready to play some exciting cricket. Shreyas Iyer leads this team,
                        which includes both experienced players and new talents, all set to show their skills on the field.KKR’s batting lineup looks powerful with players like Andre Russell,
                         Jason Roy, and Nitish Rana, who can hit the ball hard and score lots of runs.
                        </p>
                    </div>
                    </div>
                    <div className="col ms-5">
                    
                    <video controls autoplay className="rounded-3 blog6" width="500px">
                            <source src={kkr} aut/>
                       </video>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Blogs