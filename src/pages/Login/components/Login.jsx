import React from 'react';
import style from './Login.module.css';
import loginImg from'./assets/img/loginImg/kn.jpg'
import axios from 'axios';
import { useState,useEffect } from 'react';
// import {useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import SecNavbar from '../../../components/SecNavbar/SecNavbar';
import Navbar from '../../../components/Navbar/Navbar';

function Login() {
  const [userName, setUserName] = useState({
  
      email:'',
      password:'',
  });
  // const history = useHistory(); // Initialize useHistory hook
const Navigate = useNavigate();
  const handelchange=(e)=>{
    const  {name,value}= e.target;
    setUserName({...userName,[name]: value})
  
  }
  const   handelform= async(e)=>{
    
    // try {
      // const formData = new FormData();
      // formData.append("email", userName.email);
      // formData.append("password", userName.password);
      // const { data } = await axios.post(`http://localhost:5000/api/auth/login`,formData);
      // console.log(data);
      // console.log("Login successful");
    // } catch (error) {
      // setError("Invalid email or password");
      // 
      // Swal.fire({
        // icon: "error",
        // title: "Oops...",
        // text: "Something went wrong!",
        // footer: '<a href="#">Why do I have this issue?</a>'
      // });
    // }
    
    
    
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', userName);
      console.log(response.data); // Assuming the server returns some data upon successful reg
      
    if(response.data.isSecretary ===true){
      localStorage.setItem("UserToken", response.data.token);
     Navigate('/SecretariaHome');
    //  console.log("huhiuahiuhuiahf")
    }else if(response.data.isDoctor===true || response.data.isNurse===true)
    {
      localStorage.setItem("UserToken", response.data.token);
      Navigate("/Dashboard");
    }
     
     
    
    } catch (error) {
      console.error('Error:', error);

      if (error.response && error.response.status === 400) {
        // If the server returns a 400 status, it means there was an error with the request
        // Check if the error message is related to an existing email
        if (error.response.data && error.response.data.message === 'Email or password are wrong') {
          // alert('This email is already registered');
        } else {
          // Display a generic error message
          Swal.fire({
            icon: "error",
            title: "Erroorrrrr",
            text: error.response.data,
            
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
        
        
    


  }
  return (
    <div className={style.loginSection} >
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.loginImg}>
            <img src={loginImg} alt="" />
          </div>
          <div className={style.loginForm}>
            <form  onSubmit={handelform}>
              <label>Email</label>
              <input type="email" name='email' value={userName.email} onChange={handelchange} placeholder="Enter your Email" />
              <label>Password</label>
              <input type="password" name='password' value={userName.password} onChange={handelchange} placeholder="Enter your password" />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
