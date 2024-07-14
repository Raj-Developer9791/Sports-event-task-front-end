import { useNavigate } from "react-router-dom"
// import Login from "./login";

import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../images/sports.jpg"
import './ListEvent.css'
import rcb from "../images/rcblogo.png"
import mi from "../images/milogo.png"
import rr from "../images/rrlogo.png"
import lsg from "../images/lsglogo.png"
import kkr from "../images/kkrlogo.png"
import csk from "../images/csklogo.png"
import dc from "../images/dclogo.png"
import pk from "../images/pklogo.png"
import gt from "../images/gtlogo.png"
import srh from "../images/srhlogo.png"
import vs from "../images/vslogo.png"
import login from "../images/Stadium.jpg"

const sports = {
    backgroundImage: `url(${img})`
}
const eventimg={
    backgroundImage:`url(${login})`,
}
const ListEvent = () => {

    return (
        <>
            <div>
                <div className="container-fluid mainimg "  style={sports}>
                    {/* <div className="row a1">
                        <div className="col">
                        <h1 className="a2"><b>Matches</b></h1>
                        <p className="text-center a3">In the world of sports, tournaments bring communities together,
                            Football fields roar with the thunderous cheers of fans,
                            Volleyball courts witness the graceful dance of athletes,
                            And cricket pitches echo with the crack of the bat.</p>
                        </div>
                        
                    </div> */}
                    <Event2 />
                </div>
                
            </div>
        </>
    )
}
// function Event1() {

//     return (

//         <div>
//             <Event3/>
//             <div className="container-fluid bg-dark pt-5 pb-5 eventimg" style={eventimg}>
//                 <Event2/>
//             </div>
//         </div>
//     )
// }
function Event2(){
    
    return(
        <div>
            <div className="container pt-5 event2 rounded-3 pb-5">
                <Event3/>
                
            </div>
        </div>
    )
}
function Event3(){
    const navigate = useNavigate();
    const handleClick = () => {
        if( JSON.parse (localStorage.getItem("user"))){
            navigate('/add')
        }
        else{
            alert("Please login")
        }
    }
    return(
        <div className="container">
            <div className="card e1 ms-5 e8">
                    <div className="row p-0">
                    <div className="col p-0" ><img src={rcb} className="e2"/>
                        <p className="e4 e5">Royal Challenges Banglore</p>
                    </div>
                    <div className="col-2 p-0"><img src={vs} className="e3"/></div>
                    <div className="col"><img src={csk} className="e2"/>
                        <p className="ps-3 e5">Chennai super Kings</p>
                    </div>
                    <div className="card-body">
                            <p className="m-0 ps-4 e6"><b>Date :</b> April 24 at 7:30</p>
                            <p className="ps-4 e6"><b>Stadium :</b> Chinnaswamy Stadium</p>
                            <div className="btn btn-primary ms-4 mt-2 e7" onClick={handleClick}>BOOK</div>
                    </div>
                    </div>
                
            </div>
            <div className="card e1 ms-5 e8">
                    <div className="row p-0">
                    <div className="col p-0" ><img src={dc} className="e2"/>
                        <p className="e4 e5">Delhi Capitals</p>
                    </div>
                    <div className="col-2 p-0"><img src={vs} className="e3"/></div>
                    <div className="col"><img src={pk} className="e2"/>
                        <p className="ps-3 e5">Punjab Kings</p>
                    </div>
                    <div className="card-body">
                            <p className="m-0 ps-4 e6"><b>Date :</b> April 25 at 7:30</p>
                            <p className="ps-4 e6"><b>Stadium :</b> Delhi-Arun Jaitley Stadium.</p>
                            <div className="btn btn-primary mt-5 ms-4 e7" onClick={handleClick}>BOOK</div>
                    </div>
                </div>
                
            </div>
            <div className="card e1 ms-5 e8">
                    <div className="row p-0">
                    <div className="col p-0" ><img src={kkr} className="e2"/>
                        <p className="e4 e5">Kolkata Knight Riders</p>
                    </div>
                    <div className="col-2 p-0"><img src={vs} className="e3"/></div>
                    <div className="col"><img src={srh} className="e2"/>
                        <p className="ps-3 e5">Sun Rises Hyderabad</p>
                    </div>
                    <div className="card-body">
                            <p className="m-0 ps-4 e6"><b>Date :</b> April 26 at 7:30</p>
                            <p className="ps-4 e6"><b>Stadium :</b> Ahmadabad-Narendra Modi Stadium.</p>
                            <div className="btn btn-primary mt-4 ms-4 e7" onClick={handleClick}>BOOK</div>
                    </div>
                </div>
                
            </div>
            <div className="card e1 mt-5 ms-5 e8">
                    <div className="row p-0">
                    <div className="col p-0" ><img src={rr} className="e2"/>
                        <p className="e4 e5">Rajastan Royals</p>
                    </div>
                    <div className="col-2 p-0"><img src={vs} className="e3"/></div>
                    <div className="col"><img src={lsg} className="e2"/>
                        <p className="ps-3 e5">Lucknow Super Gaints</p>
                    </div>
                    <div className="card-body">
                            <p className="m-0 ps-4 e6"><b>Date :</b> April 27 at 7:30</p>
                            <p className="ps-4 e6"><b>Stadium :</b> Mumbai-Wankhede Stadium.</p>
                            <div className="btn btn-primary mt-4 ms-4 e7 " onClick={handleClick}>BOOK</div>
                    </div>
                </div>
                
            </div>
            <div className="card e1 mt-5 ms-5 e8">
                    <div className="row p-0">
                    <div className="col p-0" ><img src={gt} className="e2"/>
                        <p className="e4 e5">Gujarat Titnas</p>
                    </div>
                    <div className="col-2 p-0"><img src={vs} className="e3"/></div>
                    <div className="col"><img src={mi} className="e2"/>
                        <p className="ps-3 e5">Mumbai Indians</p>
                    </div>
                    <div className="card-body">
                            <p className="m-0 ps-4 e6"><b>Date :</b> April 28 at 3:30</p>
                            <p className="ps-4 e6"><b>Stadium :</b> Hyderabad-Rajiv Gandhi International Cricket Stadium.</p>
                            <div className="btn mt-4 ms-4 e7" onClick={handleClick}>BOOK</div>
                    </div>
                </div>
                
            </div>
            <div className="card e1 mt-5 ms-5 e8">
                    <div className="row p-0">
                    <div className="col p-0" ><img src={rcb} className="e2"/>
                        <p className="e4 e5">Royal Challenges Banglore</p>
                    </div>
                    <div className="col-2 p-0"><img src={vs} className="e3"/></div>
                    <div className="col"><img src={pk} className="e2"/>
                        <p className="ps-3 e5">Punjab Kings</p>
                    </div>
                    <div className="card-body">
                            <p className="m-0 ps-4 e6"><b>Date :</b> April 28 at 7:30</p>
                            <p className="ps-4 e6"><b>Stadium :</b> Chennai-M.A. Chidambaram Chepauk Stadium.</p>
                            <div className="btn btn-primary ms-4 e7" onClick={handleClick}>BOOK</div>
                    </div>
                </div>
                
            </div>
            <div className="card e1 mt-5 ms-5 e8">
                    <div className="row p-0">
                    <div className="col p-0" ><img src={csk} className="e2"/>
                        <p className="e4 e5">Chennai super Kings</p>
                    </div>
                    <div className="col-2 p-0"><img src={vs} className="e3"/></div>
                    <div className="col"><img src={gt} className="e2"/>
                        <p className="ps-3 e5">Gujarat Titnas</p>
                    </div>
                    <div className="card-body">
                            <p className="m-0 ps-4 e6"><b>Date :</b> April 29 at 7:30</p>
                            <p className="ps-4 e6"><b>Stadium :</b> Chennai-M.A. Chidambaram Chepauk Stadium.</p>
                            <div className="btn btn-primary mt-3 ms-4 e7" onClick={handleClick}>BOOK</div>
                    </div>
                </div>
                
            </div>
            <div className="card e1 mt-5 ms-5 e8">
                    <div className="row p-0">
                    <div className="col p-0" ><img src={srh} className="e2"/>
                        <p className="e4 e5">Sun Rises Hyderabad</p>
                    </div>
                    <div className="col-2 p-0"><img src={vs} className="e3"/></div>
                    <div className="col"><img src={mi} className="e2"/>
                        <p className="ps-3 e5">Mumbai Indians</p>
                    </div>
                    <div className="card-body">
                            <p className="m-0 ps-4 e6"><b>Date :</b> April 30 at 7:30</p>
                            <p className="ps-4 e6"><b>Stadium :</b> Mohali- Cricket Association's Bindra Stadium.</p>
                            <div className="btn btn-primary mt-3 ms-4 e7" onClick={handleClick}>BOOK</div>
                    </div>
                </div>
                
            </div>
            <div className="card e1 mt-5 ms-5 e8">
                    <div className="row p-0">
                    <div className="col p-0" ><img src={rr} className="e2"/>
                        <p className="e4 e5">Rajastan Royals</p>
                    </div>
                    <div className="col-2 p-0"><img src={vs} className="e3"/></div>
                    <div className="col"><img src={dc} className="e2"/>
                        <p className="ps-3 e5">Delhi Capitals</p>
                    </div>
                    <div className="card-body">
                            <p className="m-0 ps-4 e6"><b>Date :</b> May 1 at 7:30</p>
                            <p className="ps-4 e6"><b>Stadium :</b> Kolkata-Eden Garden.</p>
                            <div className="btn btn-primary mt-4 ms-4 e7" onClick={handleClick}>BOOK</div>
                    </div>
                </div>
                
            </div>
            <div className="card e1 mt-5 ms-5 e8">
                    <div className="row p-0">
                    <div className="col p-0" ><img src={srh} className="e2"/>
                        <p className="e4 e5">Sun Rises Hyderabad</p>
                    </div>
                    <div className="col-2 p-0"><img src={vs} className="e3"/></div>
                    <div className="col"><img src={rcb} className="e2"/>
                        <p className="ps-3 e5">Royal Challenges Banglore</p>
                    </div>
                    <div className="card-body">
                            <p className="m-0 ps-4 e6"><b>Date :</b>  May 2 at 3:30</p>
                            <p className="ps-4 e6"><b>Stadium :</b> Chinnaswamy Stadium</p>
                            <div className="btn btn-primary mt-4 ms-4 e7" onClick={handleClick}>BOOK</div>
                    </div>
                </div>
                
            </div>
            <div className="card e1 mt-5 ms-5 e8">
                    <div className="row p-0">
                    <div className="col p-0" ><img src={lsg} className="e2"/>
                        <p className="e4 e5">Lucknow super Gaints</p>
                    </div>
                    <div className="col-2 p-0"><img src={vs} className="e3"/></div>
                    <div className="col"><img src={pk} className="e2"/>
                        <p className="ps-3 e5">Punjab Kings</p>
                    </div>
                    <div className="card-body">
                            <p className="m-0 ps-4 e6"><b>Date :</b>  May 2 at 7:30</p>
                            <p className="ps-4 e6"><b>Stadium :</b> Delhi-Arun Jaitley Stadium.</p>
                            <div className="btn btn-primary mt-4 ms-4 e7" onClick={handleClick}>BOOK</div>
                    </div>
                </div>
                
            </div>
            <div className="card e1 mt-5 ms-5 e8">
                    <div className="row p-0">
                    <div className="col p-0" ><img src={mi} className="e2"/>
                        <p className="e4 e5">Mumbai Indians</p>
                    </div>
                    <div className="col-2 p-0"><img src={vs} className="e3"/></div>
                    <div className="col"><img src={rr} className="e2"/>
                        <p className="ps-3 e5">Rajastan Royals</p>
                    </div>
                    <div className="card-body">
                            <p className="m-0 ps-4 e6"><b>Date :</b>  May 3 at 7:30</p>
                            <p className="ps-4 e6"><b>Stadium :</b> Mumbai-Wankhede Stadium.</p>
                            <div className="btn btn-primary mt-4 ms-4 e7" onClick={handleClick}>BOOK</div>
                    </div>
                </div>
                
            </div>
            <div className="card e1 mt-5 ms-5 e8">
                    <div className="row p-0">
                    <div className="col p-0" ><img src={rcb} className="e2"/>
                        <p className="e4 e5">Royal Challenges Banglore</p>
                    </div>
                    <div className="col-2 p-0"><img src={vs} className="e3"/></div>
                    <div className="col"><img src={lsg} className="e2"/>
                        <p className="ps-3 e5">Lucknow super Gaints</p>
                    </div>
                    <div className="card-body">
                            <p className="m-0 ps-4 e6"><b>Date :</b>  May 4 at 7:30</p>
                            <p className="ps-4 e6"><b>Stadium :</b> Chinnaswamy Stadium</p>
                            <div className="btn btn-primary mt-3 ms-4 e7" onClick={handleClick}>BOOK</div>
                    </div>
                </div>
                
            </div>
            <div className="card e1 mt-5 ms-5 e8">
                    <div className="row p-0">
                    <div className="col p-0" ><img src={kkr} className="e2"/>
                        <p className="e4 e5">Kolkata Knight Riders</p>
                    </div>
                    <div className="col-2 p-0"><img src={vs} className="e3"/></div>
                    <div className="col"><img src={dc} className="e2"/>
                        <p className="ps-3 e5">Delhi Capitals</p>
                    </div>
                    <div className="card-body">
                            <p className="m-0 ps-4 e6"><b>Date :</b>  May 5 at 7:30</p>
                            <p className="ps-4 e6"><b>Stadium :</b> Hyderabad-Rajiv Gandhi International Cricket Stadium.</p>
                            <div className="btn btn-primary mt-3 ms-4 e7" onClick={handleClick}>BOOK</div>
                    </div>
                </div>
                
            </div>
            <div className="card e1 mt-5 ms-5 e8">
                    <div className="row p-0">
                    <div className="col p-0" ><img src={srh} className="e2"/>
                        <p className="e4 e5">Sun Rises Hyderabad</p>
                    </div>
                    <div className="col-2 p-0"><img src={vs} className="e3"/></div>
                    <div className="col"><img src={csk} className="e2"/>
                        <p className="ps-3 e5">Chennai super Kings</p>
                    </div>
                    <div className="card-body">
                            <p className="m-0 ps-4 e6"><b>Date :</b>  May 6 at 7:30</p>
                            <p className="ps-4 e6"><b>Stadium :</b> Hyderabad-Rajiv Gandhi International Cricket Stadium.</p>
                            <div className="btn btn-primary mt-3 ms-4 e7" onClick={handleClick}>BOOK</div>
                    </div>
                </div>
                
            </div>
            <div className="card e1 mt-5 ms-5 e8">
                    <div className="row p-0">
                    <div className="col p-0" ><img src={lsg} className="e2"/>
                        <p className="e4 e5">Lucknow super Gaints</p>
                    </div>
                    <div className="col-2 p-0"><img src={vs} className="e3"/></div>
                    <div className="col"><img src={gt} className="e2"/>
                        <p className="ps-3 e5">Gujarat Titnas</p>
                    </div>
                    <div className="card-body">
                            <p className="m-0 ps-4 e6"><b>Date :</b>  May 7 at 7:30</p>
                            <p className="ps-4 e6"><b>Stadium :</b> Kolkata-Eden Garden.</p>
                            <div className="btn btn-primary mt-4 ms-4 e7" onClick={handleClick}>BOOK</div>
                    </div>
                </div>
                
            </div>
            <div className="card e1 mt-5 ms-5 e8">
                    <div className="row p-0">
                    <div className="col p-0" ><img src={kkr} className="e2"/>
                        <p className="e4 e5">Kolkata Knight Riders</p>
                    </div>
                    <div className="col-2 p-0"><img src={vs} className="e3"/></div>
                    <div className="col"><img src={csk} className="e2"/>
                        <p className="ps-3 e5">Chennai super Kings</p>
                    </div>
                    <div className="card-body">
                            <p className="m-0 ps-4 e6"><b>Date :</b>  May 8 at 3:30</p>
                            <p className="ps-4 e6"><b>Stadium :</b> Chinnaswamy Stadium</p>
                            <div className="btn btn-primary mt-4 ms-4 e7" onClick={handleClick}>BOOK</div>
                    </div>
                </div>
                
            </div>
            <div className="card e1 mt-5 ms-5 e8">
                    <div className="row p-0">
                    <div className="col p-0" ><img src={srh} className="e2"/>
                        <p className="e4 e5">Sun Rises Hyderabad</p>
                    </div>
                    <div className="col-2 p-0"><img src={vs} className="e3"/></div>
                    <div className="col"><img src={rr} className="e2"/>
                        <p className="ps-3 e5">Rajastan Royals</p>
                    </div>
                    <div className="card-body">
                            <p className="m-0 ps-4 e6"><b>Date :</b>  May 8 at 7:30</p>
                            <p className="ps-4 e6"><b>Stadium :</b> Mohali- Cricket Association's Bindra Stadium.</p>
                            <div className="btn btn-primary mt-3 ms-4 e7" onClick={handleClick}>BOOK</div>
                    </div>
                </div>
                
            </div>
               
        </div>
    )
}
export default ListEvent;