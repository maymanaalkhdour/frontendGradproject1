// AllAppointment.jsx

import React, { useEffect, useState } from 'react';
import SecNavbar from '../../components/SecNavbar/SecNavbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import style from './AllAppointment.module.css';

function AllAppointment() {
  const token = localStorage.getItem('UserToken');
  const [apponitment, setAppointment] = useState([]);

  const getAllPpointment = async () => {
    const { data } = await axios.get('http://localhost:5000/api/appointments', {
      headers: { token: token }
    });
    setAppointment(data);
  };

  
  
  

 


  const deleteAppointment = async (id) => {
   try {
     await axios.delete(`http://localhost:5000/api/appointments/${id}`, {
       headers: { token: token }
     });
     // After successful deletion, update the state to remove the deleted appointment
   //   setAppointments(appointments.filter(appointment => appointment._id !== id));
   //   console.log("Appointment deleted successfully");
   getAllPpointment();
   } catch (error) {
     console.error("Error deleting appointment:", error);
   //   alert("Error deleting appointment. Please try again later.");
   }
 };


 useEffect(() => {
   getAllPpointment();
   
 }, []);


 
 


  
  

  return (
    <>
    <div className={style.tab1}>

   
      <SecNavbar />
      <table className={style.table}>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Patient Id</th>
            <th>Appointment Date</th>
            <th>Appointment Time</th>
            <th> Delete Appointment</th>
          </tr>
        </thead>
        <tbody>
         
          {apponitment.map((appoint) => (
            <tr key={appoint._id}>
              
              <td>{appoint.patientName}</td>
              <td>{appoint.idpatientnumber}</td>
              <td>{appoint.appointmentDate}</td>
              <td>{appoint.appointmentTime}</td>
               <td><button  onClick={() => deleteAppointment(appoint._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Link to='/PatientAppointments'>Add New Appointment</Link> */}
      </div>
    </>
  );
}

export default AllAppointment;
