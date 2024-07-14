import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingService from "../service/BookingService";
import './bookinglist.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle } from "react-icons/fa";
import login1 from "../images/bookinglist.jpg";

const bookimg = {
  backgroundImage: `url(${login1})`,
};

function BookingList() {
  return (
    <div>
      <div className="container-fluid book4" style={bookimg}>
        <BookingList1 />
      </div>
    </div>
  );
}

const BookingList1 = () => {
  const [tutorials, setTutorials] = useState([]);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const retrieveTutorials = () => {
    BookingService.findAll()
      .then((response) => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };

  const deleteTutorial = () => {
    BookingService.remove(currentTutorial.id)
      .then((response) => {
        console.log(response.data);
        navigate("/tutorials");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="container-fluid pt-5">
        
            <div className="book3 text-center pt-4 bg-white book5">
              <h1><b>Ticket Booking List</b></h1>
            </div>
            <table className="table table-hover mt-4 book5">
              <thead >
                <tr className="bg-primary">
                  <th className="p-5 bg-primary border border-dark">Name</th>
                  <th className="p-5 bg-primary border border-dark">Email</th>
                  <th className="p-5 bg-primary border border-dark">Phoneno</th>
                  <th className="p-5 bg-primary border border-dark">city</th>
                  <th className="p-5 bg-primary border border-dark">Address</th>
                </tr>
              </thead>
              <tbody>
                {tutorials.map((tutorial, index) => (
                    <tr className={index === currentIndex}>
                      <td className="border border-dark"><span className="book6"><FaUserCircle /></span><br/><p className="ps-4">{tutorial.Name}</p></td>
                      <td className="border border-dark">{tutorial.Email}</td>
                      <td className="border border-dark">{tutorial.Phoneno}</td>
                      <td className="border border-dark">{tutorial.city}</td>
                      <td className="border border-dark">{tutorial.Address}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
    </>
  );
};

export default BookingList;
