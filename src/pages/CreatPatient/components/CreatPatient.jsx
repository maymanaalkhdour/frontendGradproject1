import React, { useState, useRef } from 'react';
import Banner from './../../../components/Banner/Banner';
import style from './CreatPatient.module.css';
import SecNavbar from './../../../components/SecNavbar/SecNavbar';
import axios from 'axios';
import Swal from 'sweetalert2';

function CreatPatient() {
  const [patient, setPatient] = useState({
    idnumber: '',
    patientname: '',
    age: '',
    gender: '',
    address: '',
    phone: '',
  });

  const [fullnameError, setFullnameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [idnumberError, setIdnumberError] = useState('');
  const [addressError, setAddressError] = useState('');

  const idNumberRef = useRef(null);
  const patientNameRef = useRef(null);
  const ageRef = useRef(null);
  const genderRef = useRef(null);
  const addressRef = useRef(null);
  const phoneRef = useRef(null);

  const handleKeyDown = (e, fieldRef) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      if (e.key === 'ArrowRight') {
        switch (fieldRef.current.name) {
          case 'idnumber':
            patientNameRef.current.focus();
            break;
          case 'patientname':
            ageRef.current.focus();
            break;
          case 'age':
            genderRef.current.focus();
            break;
          case 'gender':
            addressRef.current.focus();
            break;
          case 'address':
            phoneRef.current.focus();
            break;
          default:
            break;
        }
      } else if (e.key === 'ArrowLeft') {
        switch (fieldRef.current.name) {
          case 'phone':
            addressRef.current.focus();
            break;
          case 'address':
            genderRef.current.focus();
            break;
          case 'gender':
            ageRef.current.focus();
            break;
          case 'age':
            patientNameRef.current.focus();
            break;
          case 'patientname':
            idNumberRef.current.focus();
            break;
          default:
            break;
        }
      }
    }
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    // patient name validation
    if (name === 'patientname' && !/^[a-zA-Z\u0621-\u064A\s]*$/.test(value)) {
      setFullnameError('Fullname must contain only letters, Arabic characters, and spaces');
    } else {
      setFullnameError('');
    }

    // idnumber validation
    if (name === 'idnumber' && !/^\d{9}$/.test(value)) {
      setIdnumberError('idnumber must be at least 9 characters long');
    } else {
      setIdnumberError('');
    }

    // Phone validation
    if (name === 'phone' && !/^\d{10}$/.test(value)) {
      setPhoneError('phone must be at least 10 characters long');
    } else {
      setPhoneError('');
    }

    // Validate address
    if (name === 'address' && !/^[a-zA-Z0-9\s,-]*$/.test(value)) {
      setAddressError('Address must contain only letters, numbers, spaces, and commas');
    } else {
      setAddressError('');
    }

    setPatient({
      ...patient,
      [name]: value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(patient);
    try {
      const response = await axios.post('http://localhost:5000/api/patient/create', patient);
      console.log(response.data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      setPatient({
        idnumber: '',
        patientname: '',
        age: '',
        gender: '',
        address: '',
        phone: '',
      });
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        if (error.response.data && error.response.data.message === 'This Patient is already exist!') {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "This Patient is already exist!",
          });
        } else {
          alert(error.response.data.message);
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    }
  };

  return (
    <>
      <div className={style.creatPatient}>
        <SecNavbar />
        <form className={style.patientForm} onSubmit={handelSubmit}>
          <div className={style.row}>
            <label htmlFor="idNum">ID Number</label>
            <div className={style.colunm}>
              <input
                type="number"
                id="idNum"
                name="idnumber"
                value={patient.idnumber}
                onChange={handelChange}
                onKeyDown={(e) => handleKeyDown(e, idNumberRef)}
                ref={idNumberRef}
                required
              />
              {idnumberError && <span className={style.error}>{idnumberError}</span>}
            </div>
          </div>
          <div className={style.row}>
            <label htmlFor="fullName">Full Name</label>
            <div className={style.colunm}>
              <input
                type="text"
                id="fullName"
                name="patientname"
                value={patient.patientname}
                onChange={handelChange}
                onKeyDown={(e) => handleKeyDown(e, patientNameRef)}
                ref={patientNameRef}
                required
              />
              {fullnameError && <span className={style.error}>{fullnameError}</span>}
            </div>
          </div>
          <div className={style.row}>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={patient.age}
              onChange={handelChange}
              onKeyDown={(e) => handleKeyDown(e, ageRef)}
              ref={ageRef}
              required
              min="1"
              step="1"
            />
          </div>
          <div className={style.row}>
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={patient.gender}
              onChange={handelChange}
              onKeyDown={(e) => handleKeyDown(e, genderRef)}
              ref={genderRef}
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className={style.row}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={patient.address}
              onChange={handelChange}
              onKeyDown={(e) => handleKeyDown(e, addressRef)}
              ref={addressRef}
              required
            />
            {addressError && <span className={style.error}>{addressError}</span>}
          </div>
          <div className={style.row}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <div className={style.colunm}>
              <input
                type="tel"
                id="phoneNumber"
                name="phone"
                value={patient.phone}
                onChange={handelChange}
                onKeyDown={(e) => handleKeyDown(e, phoneRef)}
                ref={phoneRef}
                required
              />
              {phoneError && <span className={style.error}>{phoneError}</span>}
            </div>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}

export default CreatPatient;
