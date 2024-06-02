import React, { useState } from 'react';
import style from './Register.module.css';
import axios from 'axios';
// import SecNavbar from '../../components/SecNavbar/SecNavbar'
import SecNavbar from '../../../components/SecNavbar/SecNavbar';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
// import { errorHandler } from '../../../../../project/middlewares/errors';
function Register() {
  const token =localStorage.getItem('UserToken')
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    usertype: '',
  });
  const [fullnameError, setFullnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const handelChange = (e) => {
    const { name, value } = e.target;
    
    
    if (name === 'username' && !/^[a-zA-Z\s]*$/.test(value)) {
      setFullnameError('Fullname must contain only letters and spaces');
      inputRef.current.focus();
    } else {
      setFullnameError('');}
      
      // setIsValid(/^[a-zA-Z\s]*$/.test(value));
      
      
      
      
    // Check fullname and set error message

    // Check email format and set error message
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setEmailError('Invalid email format');
      
    } else {
      setEmailError('');
    }

    // Check password length and set error message
    if (name === 'password' && value.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
     
    } else {
      setPasswordError('');
    }
    setUser({
      ...user,
      [name]: value
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', user,{
        headers:{token}
      });
      console.log(response.data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      setUser({
        username: '',
        email: '',
        password: '',
        usertype: '',
      });
    } catch (error) {
      // console.error('Error:', error);
      if (error.response && error.response.status === 400) {
        // If the server returns a 400 status, it means there was an error with the request
        // Check if the error message is related to an existing email
        if (error.response.data && error.response.data.message === 'This Email is already used!') {
          alert('This email is already registered');
        } else {
          // Display a generic error message
          Swal.fire({
            icon: "error",
            title: "Erroorrrrr",
            text: error.response.data.message,
            
          });
        }
      } else {
        // Display a generic error message
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    }
  };
      
      
    
    
    
    
      
      
   
  

  return (
    <>
   
      <SecNavbar/>
    <div className={style.registerPage}>
      <div className={style.registerForm}>
        <form onSubmit={handelSubmit}>
          <div className={style.row}>
            <label htmlFor="fullname">Full Name:</label>
            <input type="text" id="fullname" name="username" value={user.username} onChange={handelChange} required />
            {fullnameError && <span className={style.error}>{fullnameError}</span>}
          </div>
          <div className={style.row}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={user.email} onChange={handelChange} required />
            {emailError && <span className={style.error}>{emailError}</span>}
          </div>
          <div className={style.row}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={user.password} onChange={handelChange} required />
            {passwordError && <span className={style.error}>{passwordError}</span>}
          </div>
          <div className={style.row}>
            <label htmlFor="type">Type:</label>
            <select id="type" value={user.usertype} name="usertype" onChange={handelChange} required>
              <option value="Nurse">Nurse</option>
              <option value="Secretaria">Secretary</option>
              <option value="Doctor">Doctor</option>
            </select>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
    </>
  );
}
export default Register;