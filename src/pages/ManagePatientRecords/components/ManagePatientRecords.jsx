import React, { useEffect, useState } from 'react';
import Navbar from './../../../components/Navbar/Navbar';
import style from './ManagePatientRecords.module.css';
import axios from 'axios';
import Swal from "sweetalert2";
import {jwtDecode} from'jwt-decode';
function ManagePatientRecords() {
  const patientid = localStorage.getItem('patientId');
  const token = localStorage.getItem('UserToken');
  const decoded = jwtDecode(token);
  const [sessionCount, setSessionCount] = useState(0);
  const [sessionIds, setSessionIds] = useState([]);
  const [updatedData, setUpadtedData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);
  const [selectedMSession, setSelectedMSession] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null); // Track the selected session index
  const [showUpdateForm, setShowUpdateForm] = useState(false); // New state for update form visibility
const controllor=new AbortController()
  const getSessionCount = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/patient/sessioncount/${patientid}`,
        {
          headers: { token },
        }
      );
      return response.data.sessioncount;
    } catch (error) {
      console.error("Error retrieving session count:", error);
      return 0;
    }
  };
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setUpadtedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleUpdate = async (sessionid) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/createincounter/${sessionid}`,
        updatedData,
        {
          headers: { token },
        }
      );
      if (response.status == 200) {
        // sonner => npm i sonner
        // toast.success('Your Patient has been updated succes
        // alert("hihi")
        // setupdate
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
    
    
    
   console.log(error)
    
    }
  };
  const getAllSession = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/createincounter/all/${patientid}`,
        {
          headers: { token },
        }
      );
      const sessionData = response.data;
      const sessionIds = sessionData.map(session => session._id);
      setSessionIds(sessionIds);
    } catch (error) {
      console.error('Error retrieving all sessions:', error);
    }
  };

  const getMSession = async (sessionid) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/managingincounter/${sessionid}`,
        {
          headers: { token },
        }
      );
      setSelectedMSession(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error retrieving session:", error);
    }
  }

  const getSession = async (sessionid, index) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/createincounter/${sessionid}`,
        {
          headers: { token },
        }
      );
      console.log(response.data);
      setSelectedSession(response.data);
      getMSession(sessionid);
      setSelectedIndex(index);
       setShowUpdateForm(false); // Set the selected session index
      setShowForm(true);
    } catch (error) {
      console.error("Error retrieving session:", error);
    }
  };

  useEffect(() => {
    const fetchSessionCount = async () => {
      const count = await getSessionCount();
      setSessionCount(count);
     
     
     
    };
    fetchSessionCount();
  }, [patientid]);

  useEffect(() => {
    getAllSession();
    
    
    
  }, [patientid]);

  return (
    <>
      <div className={style.searchSession}>
        <Navbar />
        <div className={style.sessionsbuttons}>
          {Array.from({ length: sessionCount }, (_, index) => (
            <button
              key={index}
              className={style.sessionButton}
              onClick={() => getSession(sessionIds[index], index)} // Pass the index to getSession
            >
              Session {index + 1}
            </button>
          ))}
        </div>
        {showForm && (
          <div className={style.formSession}>
            <h2>Session Details</h2>
            <div className={style.span1}>
              <span>Blood Pressure: {selectedSession?.systolic}/{selectedSession?.diastolic}</span>
              <span>Pulse: {selectedSession?.pulse}</span>
              <span>Temperature: {selectedSession?.temperature}</span>
              <span>O2sat: {selectedSession?.o2sat}</span>
              <span>Height: {selectedSession?.height}</span>
              <span>Weight: {selectedSession?.weight}</span>
            </div>
            <p>Story: {selectedSession?.story}</p>
            <div>
              <label htmlFor="story">Xra image:</label>
             <img src={selectedSession?.xrayimage.url} alt="" />
              </div>
            {selectedIndex === 0 && ( // Check if the selected session is the first session
              <>
                <p>Chronicdiseases: {selectedSession?.chronicdiseases}</p>
                <p>Surgical: {selectedSession?.surgical}</p>
                <p>Allergy: {selectedSession?.allergy}</p>
              </>
            )}
           {
            decoded.isDoctor &&(
              <>
           {/* <p>Primary Diagnosis: {selectedMSession?.preliminarydiagnosis}</p> */}
          {/* <p>Request Diagnostic: {selectedMSession?.diagnosticprocedures}</p> */}
          {/* <p>Final Diagnosis: {selectedMSession?.finaldiagnosis}</p> */}
           {/* <p>Care Plan: {selectedMSession?.treetmentplan}</p> */}

              </>
            )
           }
          </div>
        )}
        <div>
          {selectedIndex === 0 &&(

            <button className={style.button1} onClick={() => setShowUpdateForm(!showUpdateForm)}>Update</button>
          )

          }
{ showUpdateForm &&selectedSession && selectedIndex === 0 &&(

   <form onSubmit={e => {
    e.preventDefault()
    handleUpdate(selectedSession._id)
  }}>

<div className={style.formGroupmangingupdate}>


<div className={style.formGroup}>
  <label htmlFor="idnumber">Chronicdiseases:</label>
  <input
    type="text"
    id="idnumber"
    name="chronicdiseases"
    defaultValue={selectedSession.chronicdiseases || ""}
    onChange={handleFieldChange}
  />
</div>
<div className={style.formGroup}>
  <label htmlFor="idnumber">Surgical:</label>
  <input
    type="text"
    id="idnumber"
    name="surgical"
    defaultValue={selectedSession.surgical || ""}
    onChange={handleFieldChange}
  />
</div>
<div className={style.formGroup}>
  <label htmlFor="idnumber">allergy:</label>
  <input
    type="text"
    id="idnumber"
    name="allergy"
    defaultValue={selectedSession.allergy || ""}
    onChange={handleFieldChange}
  />
</div>
</div>
<button type="submit">
  Save Upadate
</button>
    </form>
)

}

        </div>
      </div>
    </>
  );
}

export default ManagePatientRecords;
