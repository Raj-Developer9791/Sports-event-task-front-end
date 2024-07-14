import {  useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './createlogin.css';

import image from '../images/loginimage.jpg'
import image1 from "../images/loginimage1.avif"
import Adminreg from "../service/CreateAdmin.service";
const registerimage={
    backgroundImage:`url(${image})`,
    
}
const registerimage1={
    backgroundImage:`url(${image1})`
}
function CreateAdminSignup(){
    return(
        <div className="container-fluid c3 border" style={registerimage1}>
            <CreateSignup1/>
        </div>
    )
}

function CreateSignup1(){
    const [AdminName,SetadminName]=useState('');
    const [Password,Setadminpassword]=useState('')
    const [RetypePassword,Setadminrepass]=useState('')
    const navigate=useNavigate()

    const handleUserChange =(event)=>{
        SetadminName(event.target.value)
    }
    const handlePassword=(event)=>{
        Setadminpassword(event.target.value)
    }
    const handleRetypePassChange=(event)=>{
        Setadminrepass(event.target.value)
    }

    const SaveSignup = () => {
        var data = {
            AdminName:AdminName,
            Password:Password,
            RetypePassword:RetypePassword
        };

        Adminreg.create(data)
            .then(response => {
                alert("Admin Account Succesfully Created",response.data);
                navigate('/admin')
            })
            .catch(e => {
                console.log("account not yet created",e);
            });
    };

    return(
        <div>
            <form className="">
            <div className="container  c1">
                <div className="mt-5">
                    <h1 className=" text-center pb-5 pt-5"><b>REGISTER</b></h1>
                    <p className=" m-5 mb-0">AdminName :</p>
                    <div className="m-5 mt-3">
                        <input type="text" name="name" placeholder="username" onChange={handleUserChange} value={AdminName} required className="form-control"/>
                    </div>
                    <p className=" m-5 mb-0">Password :</p>
                    <div className="m-5 mt-3">  
                        <input type="text" name="Password" placeholder="pass" onChange={handlePassword} value={Password} required className="form-control"/>
                    </div>
                    <p className=" m-5 mb-0">RetypePassword :</p>
                    <div className="m-5 mt-3">
                        <input type="text" name="RetypePassword" placeholder="reEnterpass" onChange={handleRetypePassChange} value={RetypePassword} required className="form-control"/>
                    </div>
                    <button className="btn btn-primary m-5 mb-0 mt-2" onClick={SaveSignup}>Submit</button>
                </div>

            </div>
            </form>
        </div>
    );
}

export default CreateAdminSignup;
