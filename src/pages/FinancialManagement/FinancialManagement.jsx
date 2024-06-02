import React, { useEffect, useState } from 'react';
import style from './financialManagement.module.css';
import SecNavbar from '../../components/SecNavbar/SecNavbar';
import axios from 'axios';
import Swal from "sweetalert2";

function FinancialManagement() {
  const [cost ,setCost] = useState(120)
  const token= localStorage.getItem('UserToken')
const maninginsessioin = localStorage.getItem('ManagingS')
const patient =localStorage.getItem('patientID');
const [total,setTotal] =useState(0)
const [descount1,setDescount] =useState({
  discount:''
})
 const getCost = async()=>{
  try{
    const respens= await axios.get('http://localhost:5000/api/financial/',{
      headers:{token}
    });
    console.log(respens.data);
    setCost(respens.data)

  }catch(error){
console.log(error)
  }

 }
 
 useEffect(()=>{
  getCost();
 })
 
  // const discoutCost = async()=>{
// const respons = await axios.post(`http://localhost:5000/api/financial/${maninginsessioin}` ,descount1,{
  // headers:{token}
// })
  // }

 const handelChenge = (e)=>{
  setDescount({...descount1,discount:e.target.value})
 } 

  const add= async () => 
     {
  
      try {
      const respons=  await axios.post(`http://localhost:5000/api/financial/${maninginsessioin}`, 
          descount1, {
          headers: { token }
        });
        setTotal(respons.data.totalprice)
        localStorage.setItem('ManagingS','')
        localStorage.setItem('patientID','')
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          // text: error.response.data.message,
        });
      }
   
     
      
  };

  useEffect(()=>{

})

 
// const getTotal= async()=>{
  // const respons =await axios.get(`http://localhost:5000/api/financial/${maninginsessioin}`,{headers:{token}})
// console.log(respons.data.totalprice)
// setTotal(respons.data.totalprice)
// } 




  return (
    <div>
      <div className={style.financialManagement}>
        <SecNavbar />
        <div className={style.financialManagementForm}>
          <div className={style.row}>
            <label>Patient ID:</label>
            <input type="text"  defaultValue={patient ||''} readOnly />
          </div>
          <div className={style.row}>
            <label>Session Cost (₪):</label>
            <input type="number"  defaultValue={cost} readOnly />
          </div>
          <div className={style.row}>
            <label>Discount Percentage:</label>
            <input type="number" name='discount' value={descount1.discount} onChange={handelChenge}  />
          </div>
          <button onClick={add}>Add</button>
          <div className={style.row}>
            <label>Total Cost (₪):</label>
            <input type="text" value={total}  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialManagement;
