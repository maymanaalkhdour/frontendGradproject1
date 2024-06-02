import React, { useEffect, useState } from 'react';
import SecNavbar from '../../components/SecNavbar/SecNavbar';
import axios from 'axios';
import style from './HomeSec.module.css';

function HomeSec() {
  const token = localStorage.getItem('UserToken');
  const [appointments, setAppointments] = useState([]);

  const getAllAppointments = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/appointments', {
        headers: { token: token }
      });
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  useEffect(() => {
    getAllAppointments();
  }, []);

  const currentDate = new Date().toDateString();

  // Filter appointments for today
  const filteredAppointments = appointments.filter(appointment => new Date(appointment.appointmentDate).toDateString() === currentDate);

  // Save filtered appointments to local storage
  useEffect(() => {
    localStorage.setItem('filteredAppointments', JSON.stringify(filteredAppointments));
  }, [filteredAppointments]);

  return (
    <>
      <SecNavbar />
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
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map((appointment) => (
            <tr key={appointment._id}>
              <td>{appointment.patientName}</td>
              <td>{appointment.idpatientnumber}</td>
              <td>{appointment.appointmentDate}</td>
              <td>{appointment.appointmentTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default HomeSec;
