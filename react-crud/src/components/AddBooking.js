import React,{useState} from "react";
import BookingService from "../service/BookingService";
import 'bootstrap/dist/css/bootstrap.min.css';
import './addbooking.css'

import img from "../images/sports.jpg"
const sports={
  backgroundImage:`url(${img})`
}
function Add1()
{
  return(
    <div>
      <div className="container-fluid pt-5" id="addimg1" style={sports}>
        <AddBooking/>
      </div>
    </div>
  )
}
const AddBooking = () => {
    const initialBookigState = {
      id: null,
      Name:"",
      Email:"",
      Phoneno:"",
      city:"",
      Address:""
    };
    const [tutorial, setTutorial] = useState(initialBookigState);
    const [submitted, setSubmitted] = useState(false);
  
    const handleInputChange = event => {
      const { name, value } = event.target;
      setTutorial({ ...tutorial, [name]: value });
    };
  
    const saveTutorial = () => {
      var data = {
        id:tutorial.id,
        Name:tutorial.Name,
        Email:tutorial.Email,
        Phoneno:tutorial.Phoneno,
        city:tutorial.city,
        Address:tutorial.Address
      };
  
      BookingService.create(data)
        .then(response => {
          setTutorial({
            id: response.data.id,
            Name: response.data.Name,
            Email: response.data.Email,
            Phoneno: response.data.Phoneno,
            city:response.data.city,
            Address:response.data.Address
          });
          setSubmitted(true);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
  
    const newTutorial = () => {
      setTutorial(initialBookigState);
      setSubmitted(false);
    };
  
    return (
      <>
        <div className="container pt-5 pb-5  addbook2">
      {submitted ? (
        <div>
          <h4>Your Conformation !</h4>
          <p>Name:{tutorial.Name}</p>
          <p>Phoneno:{tutorial.Phoneno}</p>
          <p>Address:{tutorial.Address}</p>
          <p>Status: Booked</p>
          <button className="btn btn-primary mt-5" onClick={newTutorial}>Book Another Tickets</button>
        </div>
      ) : (
        <div className="addtxtcolor ">
          <p className="text-dark">Name :</p>
          <div className=" mt-2">
            
            <input
              type="text"
              className="form-control"
              required
              value={tutorial.Name}
              onChange={handleInputChange}
              name="Name"
              placeholder="name"
            />
          </div>
          <p className="text-dark pt-4">Email :</p>
          <div className="form-group mt-3">
            
            <input
              type="text"
              className="form-control"
              placeholder="e-mail"
              required
              value={tutorial.Email}
              onChange={handleInputChange}
              name="Email"
            />
          </div>
          <p className="text-dark pt-4">Phoneno :</p>
          <div className="form-group mt-3">
            
            <input
              type="text"
              className="form-control"
              placeholder="contact"
              required
              value={tutorial.Phoneno}
              onChange={handleInputChange}
              name="Phoneno"
            />
          </div>
          <p className="text-dark pt-4">City :</p>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="city"
              required
              value={tutorial.city}
              onChange={handleInputChange}
              name="city"
            />
          </div>
          <p className="text-dark pt-4">Address :</p>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              required
              value={tutorial.Address}
              onChange={handleInputChange}
              name="Address"
              
            />
          </div>

          <button onClick={saveTutorial} className="btn btn-success mt-5">
            Submit
          </button>
        </div>
      )}
    </div>
      </>
    );
  };
  
  export default Add1;
