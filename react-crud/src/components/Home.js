import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import { useNavigate } from 'react-router-dom';

// IPL Teams
import team1 from "../images/rcb.jpg"
import team2 from "../images/mi.jpg"
import team3 from "../images/gt.jpg"
import team4 from "../images/csk.webp"
import team5 from "../images/rr.webp"
import team6 from "../images/srh.webp"
import team7 from "../images/lsg.jpg"
import team8 from "../images/pk.webp"
import team9 from "../images/kkr.jpg"
import team10 from "../images/dc.jpg"
import logo from "../images/logo.png"
import Stadium from "../images/loginimage.jpg"

const img4 = {
    backgroundImage: `url(${Stadium})`,
  
  }
const ipl = {
    backgroundImage: `url(${logo})`
  }
function Home() {
    return (
      <div>
        
        <Main />
        
      </div>
    )
  }
  function Main() {
    return (
      <div>
        <div className='container-fluid main1' style={img4}>
          <div className='row main2 '>
            <div className='col'></div>
            <div className='col homecol'>
              <h1 className='s1 s1text mb-0 navtxt'><b>Tournament Cup</b></h1>
              <h1 className='s1text m-0 navtxt'><b>Events</b></h1>
              <p className='s2'>In the world of sports, tournaments bring communities together,
                cricket fields roar with the thunderous cheers of fans,
                Volleyball courts witness the graceful dance of athletes,
                And cricket pitches echo with the crack of the bat.</p>
            </div>
          </div>
        </div>
        <Main1 />
      </div>
    )
  }
  function Main1() {
    return (
      <div>
        <div className='container-fluid s4'>
          <div className='row mb-4'>
            <div className='col-3 mt-4 ipllogo' style={ipl}></div>
          </div>
  
        </div>
        <Main2 />
      </div>
    )
  }
  function Main2() {
  
  const navigate=useNavigate()
  const handlechange=()=>{
    navigate('/blogs')
  }
  
    return (
      <div>
        <div className='container-fluid s5 '>
          <div className='row pt-5'>
            <div className='col-2 teammargin'>
  
              <button className='rcb border-0  ms-5 team' onClick={handlechange}>
                <img src={team1} className='team colum' />
              </button>
              <h3 className=' rcbtxt'>RCB</h3>
            </div>
            <div className='col-2'>
              <button className='bg-primary border-0 ms-5 team' onClick={handlechange}> 
                <img src={team2} className='team colum' />
                
              </button>
              <h3 className=' rcbtxt'>MI</h3>  
            </div>
            <div className='col-2'>
              <button className='gt border-0 ms-5 team' onClick={handlechange}> 
                <img src={team3} className='team colum' />
                
              </button>
              <h3 className=' rcbtxt'>GT</h3> 
            </div>
            <div className='col-2'>
              <button className='bg-white border-0 ms-5 team' onClick={handlechange}>
                <img src={team4} className='team colum' />
                 
              </button>
              <h3 className=' rcbtxt'>CSK</h3>
            </div>
            <div className='col-2'>
              <button className=' border-0 ms-5 dc team' onClick={handlechange}> 
                <img src={team10} className='team colum' />
                
              </button>
              <h3 className=' rcbtxt'>DC</h3> 
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-2 teammargin'>
              <button className='rr border-0 ms-5 team' onClick={handlechange}> 
                <img src={team5} className='team colum' />
                 
              </button>
              <h3 className=' rcbtxt'>RR</h3>
            </div>
            <div className='col-2'>
              <button className='srh border-0 ms-5 team' onClick={handlechange}>
                <img src={team6} className='team colum' />
                
              </button>
              <h3 className=' rcbtxt'>SRH</h3> 
            </div>
            <div className='col-2'>
              <button className='lg border-0 ms-5 team' onClick={handlechange}>
                <img src={team7} className='team colum' />
                
              </button>
              <h3 className=' rcbtxt'>LG</h3> 
            </div>
            <div className='col-2'>
              <button className='pk border-0 ms-5 team' onClick={handlechange}> 
                <img src={team8} className='team colum' />
                
              </button>
              <h3 className=' rcbtxt'>PK</h3> 
            </div>
            <div className='col-2'>
              <button className='kkr border-0 ms-5 team' onClick={handlechange}>
                <img src={team9} className='team colum' />
                
              </button>
              <h3 className=' rcbtxt'>KKR</h3> 
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  export default Home;