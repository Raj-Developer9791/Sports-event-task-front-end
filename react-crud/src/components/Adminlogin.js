import { useState } from "react"
import "./Createuser login"
// import { useLocation, useNavigate } from "react-router-dom"
import './login.css'
// import LoginService from "../service/LoginService"
import { useNavigate } from "react-router-dom"


// Background Image

import login1 from "../images/sports.jpg"
import AdminService from "../service/AdminService"


const loginimage1={
    backgroundImage:`url(${login1})`
}

function AdminLogin(){
    return(
        <div>
            <div className="container-fluid login3" style={loginimage1}>
                <Login1/>
            </div>
        </div>
    )
}
function Login1() {
    const [AdminName,Setemail]=useState('')
    const [Password,Setpassword]=useState('')
    

    const handleEmailChange=(event)=>{
        Setemail(event.target.value)
        
    }
    const handlePasswordChange=(event)=>{
        Setpassword(event.target.value)
        
    }
    
        const handleLogin = () => {
            const data={
                AdminName:AdminName,
                Password:Password
            }
            AdminService.admin(data)
                .then(response => { 
                    alert("Admin Login Successfull",response.data)
                    localStorage.setItem("admin",JSON.stringify(response.data)) 
                    navigate('/tutorials')
                })
                .catch(error => {
                    // Handle login error here
                    alert("User not Found")
                    console.error("Login error:", error);
                });
        };
    
    const navigate=useNavigate()
     const handleClick=()=>{
        navigate('/createadmin')
     }
    return (
        <div>
            <div className="container login1 login4" >
                <div className="p-5 mb-5 rounded-3">
                    <h1 className="text-center "><b>Admin Login</b></h1>
                     <p className=""><b>Email :</b></p>
                     <div>
                        <input type="text" name="Email" placeholder="email" onChange={handleEmailChange} required className="form-control "/>
                     </div>
                     <p className="mt-5"><b>Password :</b></p>
                     <div>
                        <input type="text" name="Password" placeholder="password" onChange={handlePasswordChange} required className="form-control"/>
                     </div>
                     <button className="btn btn-primary rounded-3 mt-5" onClick={handleLogin}>Login</button>
                     <button className="btn btn-primary mt-5 login2" onClick={handleClick}>create account</button>
                 </div>
                 
            </div>
        </div>
    )
}
export default AdminLogin