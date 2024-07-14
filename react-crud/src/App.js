// import logo from './logo.svg';
import './App.css';



import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';


import AddBooking from "./components/AddBooking";
import Login from './components/Userlogin';
import Booking from "./components/BookingList";
import Createlogin from './components/Createuser login';
import Blogs from './components/blogs';
import ListEvent from './components/ListEvent';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';




// ICONS
import { MdSportsVolleyball } from "react-icons/md";
import AdminLogin from './components/Adminlogin';
import CreateAdminSignup from './components/CreateAdmin login';
import AdminPrivateRoute from './components/AdminPrivateRoute';
import CRUDoperation from './components/CRUDoperation';

function App() {

  const isAuthenticated = JSON.parse(localStorage.getItem("user"))
  const isAdmin = JSON.parse(localStorage.getItem("admin"))
  console.log(isAdmin)
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    localStorage.removeItem("user")
    localStorage.removeItem("admin")
  }
  return (
    <>
      <div className='container-fluid p-0'>

        <nav className="navbar navbar-expand navbarcolor">
          <a href="" className='icon1 ps-4 pt-0 mt-0 '><MdSportsVolleyball /></a>
          <h2 className='me-auto text-white pt-4 '><b>IPL</b><sub className='sup'> Club</sub></h2>

          <div className='navbar-nav ms-auto '>
            <li className='nav-item'>
              <Link to={"/"} className='nav-link text-white navtxt'><b>HOME</b></Link>
            </li>

            {
              isAuthenticated ? (
                <>
                  <li className='nav-item'>
                    <Link to={"/event"} className='nav-link ps-5 text-white navtxt'><b>MATCHES</b></Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={"/login"} className='nav-link ps-5  text-white navtxt' onClick={handleLogout}><b>USERLOGOUT</b></Link>
                  </li>

                </>
              ) : (
                <>
                  <li className='nav-item'>
                    <Link to={"/event"} className='nav-link ps-5 text-white navtxt'><b>MATCHES</b></Link>
                  </li>
                  <li className='nav-item'>


                    <div className="dropdown pt-1 ps-3 navtxt">
                      <button className="dropbtn pt-1"><b>SIGNIN</b></button>
                      <div className="dropdown-content">
                        <Link to={"/login"}>User</Link>
                        <Link to={"/admin"}>Admin</Link>
                      </div>
                    </div>
                  </li>

                </>
              )
            }
            {
                    isAdmin && (
                      <>
                        <li className='nav-item'>
                          <Link to={"/login"} className='nav-link ps-5  text-white navtxt' onClick={handleLogout}><b>ADMINLOGOUT</b></Link>
                        </li>
                        <li className='nav-item'>
                          <Link to={"/tutorials"} className='nav-link ps-5 text-white navtxt'><b>MYBOOKING</b></Link>
                        </li>
                      </>

                    )
                  }
            <li className='nav-item'>
              <Link to={"/blogs"} className='nav-link ps-3 text-white navtxt'><b>BLOGS</b></Link>
            </li>

          </div>
        </nav>

      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorials" element={<AdminPrivateRoute><Booking/></AdminPrivateRoute>} />
        <Route path="/add" element={<PrivateRoute><AddBooking /></PrivateRoute>} />
        <Route path="event" element={<ListEvent />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createlogin' element={<Createlogin />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/createadmin' element={<CreateAdminSignup />} />
        <Route path='/crudoperation' element={<CRUDoperation/>}/>
      </Routes>


    </>
  );
}
export default App