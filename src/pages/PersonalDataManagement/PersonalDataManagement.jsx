import React, { useState, useEffect } from "react";
import SecNavbar from "./../../components/SecNavbar/SecNavbar";
import style from "./personalDataManagement.module.css";
import axios from "axios";
import Swal from "sweetalert2";

function PersonalDataManagement() {
  const [idPatient, setIdPatient] = useState("");
  const [patientData, setPatientData] = useState(null);
  const [updatedData, setUpadtedData] = useState({});
  const token = localStorage.getItem("UserToken");

  const getPatient = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/patient/${idPatient}`,
        {
          headers: { token: token },
        }
      );
      setPatientData(response.data);
      // name = response.data.patientname;
      // age = response.data.age;
      // idNumber = response.data.idNumber;
      // Phon = response.data.phone;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
      }).then(() => {
        setSearchClicked(false);
        setIdPatient({ ...idPatient, id_pacient: "" });
      });
    }
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setUpadtedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/patient/${idPatient}`,
        updatedData,
        {
          headers: { token },
        }
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      // if (response.status == 200) {
        // sonner => npm i sonner
        // toast.success('Your Patient has been updated succesfully')
        //  setupdate
      // }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        // text: error.response.data.message,
      });
    }
  };

  /* 
    {
      idnumber: '',
      patientname: ""
      age
      phone
    }
   */

  return (
    <>
      <div className={style.searchSession}>
        <SecNavbar />
        <form
          className={style.searchContainer}
          // style={{ display: idPatient ? "none" : "block" }}
          onSubmit={(e) => {
            e.preventDefault();
            getPatient();
          }}
        >
          <input
            type="text"
            value={idPatient}
            onChange={(e) => setIdPatient(e.target.value)}
            placeholder="Enter patient ID..."
          />
          <button type="submit">Search</button>
        </form>
        {patientData && (
          <div className={style.hi}>
            <form onSubmit={e => {
              e.preventDefault()
              handleUpdate()
            }}>
              <div className={style.formGroup}>
                <label htmlFor="idnumber">Patient Id:</label>
                <input
                  type="text"
                  id="idnumber"
                  name="idnumber"
                  defaultValue={patientData.idnumber || ""}
                  onChange={handleFieldChange}
                />
              </div>
              <div className={style.formGroup}>
                <label htmlFor="patientname">Patient Name:</label>
                <input
                  type="text"
                  id="patientname"
                  name="patientname"
                  defaultValue={patientData.patientname || ""}
                  onChange={handleFieldChange}
                />
              </div>
              <div className={style.formGroup}>
                <label htmlFor="age">Patient Age:</label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  defaultValue={patientData.age || ""}
                  onChange={handleFieldChange}
                />
              </div>
              <div className={style.formGroup}>
                <label htmlFor="phone">Patient Phone:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  defaultValue={patientData.phone || ""}
                  onChange={handleFieldChange}
                />
              </div>
              {/* Add more fields as needed */}
              <button type="submit">
                Update
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
export default PersonalDataManagement;
