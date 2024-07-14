import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import './createlogin.css';
import Createlogin from "../service/CreateLogin";

import image from '../images/loginimage.jpg'
import image1 from "../images/loginimage1.avif"
const registerimage={
    backgroundImage:`url(${image})`,
    
}
const registerimage1={
    backgroundImage:`url(${image1})`
}
function CreateSignup(){
    return(
        <div className="container-fluid c3 border" style={registerimage1}>
            <CreateSignup1/>
        </div>
    )
}

function CreateSignup1(){
    const [Username,Setusername]=useState('');
    const [Email,Setemail]=useState('')
    const [PhoneNum,Setnumber]=useState('')
    const [Password,Setpassword]=useState('')
    const [RetypePassword,Setrepass]=useState('')
    const navigate=useNavigate

    const handleUserChange =(event)=>{
        Setusername(event.target.value)
    }
    const handleEmailChange=(event)=>{
        Setemail(event.target.value)
    }
    const handleNumberChange=(event)=>{
        Setnumber(event.target.value)
    }
    const handlePassword=(event)=>{
        Setpassword(event.target.value)
    }
    const handleRetypePassChange=(event)=>{
        Setrepass(event.target.value)
    }

    const SaveSignup = () => {
        var data = {
            Username: Username,
            Email: Email,
            PhoneNum: PhoneNum,
            Password: Password,
            RetypePassword: RetypePassword
        };

        Createlogin.create(data)
            .then(response => {
                alert("Account Succesfully Created",response.data);
                navigate('/login')

            })
            .catch(e => {
                console.log("account not yet created",e);
            });
    };

    return(
        <div>
            <form>
            <div className="container  c1">
                <div className="mt-5">
                    <h1 className=" text-center pb-5 pt-5"><b>REGISTER</b></h1>
                    <p className=" m-5 mb-0">Username :</p>
                    <div className="m-5 mt-3">
                        <input type="text" name="name" placeholder="username" onChange={handleUserChange} value={Username} required className="form-control"/>
                    </div>
                    <p className=" m-5 mb-0">Email :</p>
                    <div className="m-5 mt-3">
                        <input type="text" name="Email" placeholder="email" onChange={handleEmailChange} value={Email} required className="form-control"/>
                    </div>
                    <p className=" m-5 mb-0">PhoneNum :</p>
                    <div className="m-5 mt-3">
                        <input type="text" name="PhoneNum" placeholder="contact" onChange={handleNumberChange} value={PhoneNum} required className="form-control"/>
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

export default CreateSignup;
