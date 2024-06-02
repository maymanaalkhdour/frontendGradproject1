import React, { useState, useEffect, useRef } from "react";
import style from "./PatientAppointments.module.css";
import Calendar from "react-calendar";
import SecNavbar from "./../../components/SecNavbar/SecNavbar";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import Swal from 'sweetalert2';
import moment from 'moment';

const PatientAppointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [fullnameError, setFullnameError] = useState('');
  const [idnumberError, setIdnumberError] = useState('');
  const [appointmentInfo, setAppointmentInfo] = useState({
    patientId: "",
    patientName: "",
  });
  const [bookedAppointments, setBookedAppointments] = useState([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  const inputRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowTimePicker(true);
    setAppointmentInfo({
      patientId: "",
      patientName: "",
    });
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'patientId' && !/^\d{9}$/.test(value)) {
      setIdnumberError('PatientId must be at least 9 characters long');
    } else {
      setIdnumberError('');
    }

    if (name === 'patientName' && !/^[a-zA-Z\u0621-\u064A\s]*$/.test(value)) {
      setFullnameError('Fullname must contain only letters, Arabic characters, and spaces');
      inputRef.current.focus();
    } else {
      setFullnameError('');
    }

    setAppointmentInfo({
      ...appointmentInfo,
      [name]: value,
    });
  };

  const handleAppointmentBooking = async () => {
    try {
      let day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      const data = {
        appointmentDay: day[selectedDate.getDay()],
        appointmentTime: selectedTime,
        appointmentDate: selectedDate.toDateString(),
        patientId: parseInt(appointmentInfo.patientId),
        patientName: appointmentInfo.patientName,
      };

      const token = localStorage.getItem('UserToken');
      const currentDate = new Date();

      if (currentDate <= selectedDate) {
        if (isBookedAppointment(selectedTime)) {
          alert("This time slot is already booked. Please choose another time.");
          return;
        }

        const response = await axios.post(`http://localhost:5000/api/appointments/${appointmentInfo.patientId}`, data, {
          headers: { token: token }
        });

        console.log("Appointment booked:", response.data);

        const newAppointment = {
          date: selectedDate,
          time: selectedTime,
          patientId: appointmentInfo.patientId,
          patientName: appointmentInfo.patientName,
        };
        const updatedAppointments = [...bookedAppointments, newAppointment];
        setBookedAppointments(updatedAppointments);
        setSelectedDate(new Date());
        setSelectedTime("");
        setShowTimePicker(false);
        setAppointmentInfo({
          patientId: "",
          patientName: "",
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your appointment has been booked",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        alert('Please select a date after today');
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "An error occurred while booking the appointment",
      });
    }
  };

  const isBookedAppointment = (time) => {
    return bookedAppointments.some(
      (appointment) => appointment.time === time
    );
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const dateStr = date.toDateString();
      const bookedDates = bookedAppointments.map(appointment => new Date(appointment.date).toDateString());
      if (bookedDates.includes(dateStr)) {
        return <div className={style.bookedDate}></div>;
      }
    }
    return null;
  };

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  return (
    <div className={style.patientAppointment}>
      <SecNavbar />
      <div className={style.patientAppointmentForm}>
        <div className={style.calendarContainer}>
          <label className={style.label}>Select Visit Date:</label>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            navigationAriaLabel="calendar navigation"
            prev2Label={null}
            next2Label={null}
            tileContent={tileContent}
            prevLabel={<span style={{ marginRight: "5px" }}>{"<"}</span>}
            nextLabel={<span style={{ marginLeft: "5px" }}>{">"}</span>}
          />
        </div>
        <div className={style.calendarContainer}>
          {showTimePicker && (
            <>
              <label className={style.label}>Select Visit Time:</label>
              <select
                value={selectedTime}
                onChange={(e) => handleTimeChange(e.target.value)}
                className={style.input}
              >
                <option value="">Select Time</option>
                {timeSlots.map((timeSlot, index) => (
                  <option key={index} value={timeSlot} disabled={isBookedAppointment(timeSlot)}>
                    {timeSlot}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
        <div className={style.row}>
          <div className={style.row}>
            <label className={style.label}>Patient ID:</label>
            <input
              type="text"
              name="patientId"
              value={appointmentInfo.patientId}
              onChange={handleInputChange}
              className={style.input}
              ref={inputRef}
            />
            {idnumberError && <span className={style.error}>{idnumberError}</span>}
          </div>
          <div className={style.row}>
            <label className={style.label}>Patient Name:</label>
            <input
              type="text"
              name="patientName"
              value={appointmentInfo.patientName}
              onChange={handleInputChange}
              className={style.input}
            />
            {fullnameError && <span className={style.error}>{fullnameError}</span>}
          </div>
        </div>
        <button onClick={handleAppointmentBooking} className={style.button}>
          Book Appointment
        </button>
      </div>
      <Link className={style.block} to='/AllAppointment/'><h2>All Appointment</h2></Link>
    </div>
  );
};

export default PatientAppointments;
