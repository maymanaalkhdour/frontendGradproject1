import React, { useEffect, useState } from 'react';
import style from './Home.module.css';
import Navbar from './../../../components/Navbar/Navbar';
import axios from 'axios';
import { Link } from "react-router-dom";
import {jwtDecode} from'jwt-decode';

function Home() {
  const token = localStorage.getItem('UserToken');
  const [filterappiontment, setFilterAppoiontment] = useState([]);
  const decoded = jwtDecode(token);
  const getAppointment = () => {
    const appintments = JSON.parse(localStorage.getItem('filteredAppointments')) || [];
    setFilterAppoiontment(appintments);
  };

  const removData=(id)=>{
const patient =localStorage.getItem('patientId');
localStorage.setItem('patientID',patient)
const managing =localStorage.getItem('mssesionid')
localStorage.setItem('ManagingS',managing)
    const updatedAppointments = filterappiontment.filter(appointment => appointment._id !== id);
    localStorage.setItem('filteredAppointments', JSON.stringify(updatedAppointments));
    setFilterAppoiontment(updatedAppointments);
    localStorage.setItem('patientId', '');
    localStorage.setItem('Createidsession', '');
    // localStorage.setItem('mssesionid', '');


  }
  useEffect(() => {
    getAppointment();
  }, []);

  const sessionClick =(patinetid)=>{
    localStorage.setItem('patientId',patinetid);
  }
  return (
    <>
      <Navbar />
      <div className={style.homesec}>
        <h2>Appointments for Today : </h2>
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Patient Id</th>
            <th>Appointment Date</th>
            <th>Appointment Time</th>
            <th>Creat Session</th>
            {decoded.isDoctor &&
              <th>Done</th>

          }
          </tr>
        </thead>
        <tbody>
          {filterappiontment.map((appointment) => (
            <tr key={appointment._id}>
              <td>{appointment.patientName}</td>
              <td>{appointment.idpatientnumber}</td>
              <td>{appointment.appointmentDate}</td>
              <td>{appointment.appointmentTime}</td>
              <td> <Link to={`/creatSession`} onClick={()=>{
                sessionClick(appointment.idpatientnumber)
              }}>Create Sessios</Link> </td>
              {decoded.isDoctor &&(
                <td><button onClick={()=>{removData(appointment._id)}}>Done</button></td>

              )

              }
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
