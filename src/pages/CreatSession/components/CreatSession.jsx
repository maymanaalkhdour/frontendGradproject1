import React, { useState, useRef, useEffect } from "react";
import style from "./CreatSession.module.css";
import Navbar from "../../../components/Navbar/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { useSession } from "../../../context/SessionCont";
import { useForms } from "../../../hooks/useForms";
import {jwtDecode} from 'jwt-decode';

function CreatSession() {
  const { updateSessionData } = useSession();
  const patientid = localStorage.getItem("patientId");
  const token = localStorage.getItem("UserToken");
  const decoded = jwtDecode(token);
  const fileInputRef = useRef(null);
  const { session, setSession } = useForms();
  const [latestSession, setLatestSession] = useState(null);
  const [sessionCount, setSessionCount] = useState(0);
  const [isDone,setIsDone] = useState(false);

  const latest = async () => {
    const response = await axios.get(`http://localhost:5000/api/createincounter/latest/${patientid}`, {
      headers: { token }
    });
    console.log(response.data.createdAt);
    setLatestSession(response.data);
    return response.data;
  };

  useEffect(() => {
    const checkDoctorAndDate = async () => {
      if (decoded.isDoctor === true) {
        const response = await latest();
        const latestDate = new Date(response.createdAt);
        console.log(latestDate);
        const currentDate = new Date();

        if (currentDate.toDateString() === latestDate.toDateString()) {
          localStorage.setItem("Createidsession", response._id);
          setIsDone(true);
          console.log(response);
        } else {
          console.log("The dates are different.");
        }
      }
    };

    checkDoctorAndDate();
  }, [decoded]);

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

  useEffect(() => {
    const fetchSessionCount = async () => {
      const count = await getSessionCount();
      setSessionCount(count);
    };

    fetchSessionCount();
  }, [patientid]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (
      [
        "systolic",
        "diastolic",
        "pulse",
        "temperature",
        "respiration",
        "o2sat",
        "height",
        "weight",
      ].includes(name)
    ) {
      if (!isNaN(value)) {
        setSession({
          ...session,
          [name]: value,
        });
      }
    } else {
      setSession({
        ...session,
        [name]: value,
      });
    }
  };

  const handleImage = (e) => {
    const { name, files } = e.target;
    setSession({
      ...session,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("systolic", session.systolic);
    formData.append("diastolic", session.diastolic);
    formData.append("pulse", session.pulse);
    formData.append("temperature", session.temperature);
    formData.append("respiration", session.respiration);
    formData.append("o2sat", session.o2sat);
    formData.append("height", session.height);
    formData.append("weight", session.weight);
    formData.append("story", session.story);

    if (sessionCount <= 1) {
      formData.append("chronicdiseases", session.chronicdiseases);
      formData.append("surgical", session.surgical);
      formData.append("allergy", session.allergy);
    }

    formData.append("xrayimage", session.xrayimage);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/createincounter/${patientid}`,
        formData,
        {
          headers: { token },
        }
      );
      console.log(response.data._id);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      localStorage.setItem("Createidsession", response.data._id);
      updateSessionData(session);
      setSession({
        systolic: "",
diastolic: "",
pulse: "",
temperature: "",
respiration: "",
o2sat: "",
height: "",
weight: "",
story: "",
chronicdiseases: "",
surgical: "",
allergy: "",
xrayimage: "",
      })
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
      });
    }
  };

  const getStyleForTemperature = () => {
    const temperatureValue = parseFloat(session.temperature);
    if (!isNaN(temperatureValue)) {
      if (temperatureValue < 36 || temperatureValue > 37) {
        return style.redText;
      } else {
        return style.greenText;
      }
    }
    return "";
  };

  const getStyleForBlood1 = () => {
    const systolicValue = parseInt(session.systolic);
    if (!isNaN(systolicValue)) {
      if (systolicValue < 90 || systolicValue > 120) {
        return style.redText;
      } else {
        return style.greenText;
      }
    }
    return "";
  };

  const getStyleForBlood2 = () => {
    const diastolicValue = parseInt(session.diastolic);
    if (!isNaN(diastolicValue)) {
      if (diastolicValue < 60 || diastolicValue > 80) {
        return style.redText;
      } else {
        return style.greenText;
      }
    }
    return "";
  };

  const getStyleForPulse = () => {
    const pulseValue = parseInt(session.pulse);
    if (!isNaN(pulseValue)) {
      if (pulseValue < 60 || pulseValue > 100) {
        return style.redText;
      } else {
        return style.greenText;
      }
    }
    return "";
  };

  const getStyleForRespiration = () => {
    const respirationValue = parseInt(session.respiration);
    if (!isNaN(respirationValue)) {
      if (respirationValue < 12 || respirationValue > 18) {
        return style.redText;
      } else {
        return style.greenText;
      }
    }
    return "";
  };

  const getStyleForO2Sat = () => {
    const o2satValue = parseInt(session.o2sat);
    if (!isNaN(o2satValue)) {
      if (o2satValue < 95 || o2satValue > 100) {
        return style.redText;
      } else {
        return style.greenText;
      }
    }
    return "";
  };

  return (
    <>
      <div className={style.creatSession}>
        <Navbar />
        { isDone===false &&(

        
        <form className={style.creatSessionForm} onSubmit={handleSubmit}>
          <div className={style.vitalSigns}>
            <label htmlFor="systolic">Blood Pressure:</label>
            <input
              type="text"
              id="systolic"
              name="systolic"
              value={session.systolic}
              className={getStyleForBlood1()}
              onChange={handleChange}
              required
            />
            <label htmlFor="diastolic">/</label>
            <input
              type="text"
              id="diastolic"
              name="diastolic"
              value={session.diastolic}
              className={getStyleForBlood2()}
              onChange={handleChange}
              required
            />
            <label htmlFor="pulse">Pulse:</label>
            <input
              type="text"
              id="pulse"
              name="pulse"
              value={session.pulse}
              className={getStyleForPulse()}
              onChange={handleChange}
              required
            />
            <label htmlFor="temperature">Temperature:</label>
            <input
              type="text"
              id="temperature"
              name="temperature"
              value={session.temperature}
              className={getStyleForTemperature()}
              onChange={handleChange}
              required
            />
            <label htmlFor="respiration">Respiration:</label>
            <input
              type="text"
              id="respiration"
              name="respiration"
              value={session.respiration}
              className={getStyleForRespiration()}
              onChange={handleChange}
              required
            />
            <label htmlFor="o2sat">O2sat:</label>
            <input
              type="text"
              id="o2sat"
              name="o2sat"
              value={session.o2sat}
              className={getStyleForO2Sat()}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.row}>
            <div className={style.row}>
              <label htmlFor="height">Height</label>
              <input
                type="text"
                id="height"
                name="height"
                value={session.height}
                onChange={handleChange}
                required
              />
            </div>
            <div className={style.row}>
              <label htmlFor="weight">Weight</label>
              <input
                type="text"
                id="weight"
                name="weight"
                value={session.weight}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="story">Story:</label>
            <textarea
              id="story"
              name="story"
              value={session.story}
              onChange={handleChange}
              required
            />
            {sessionCount <= 1 && (
              <>
                <label htmlFor="chronicdiseases">Chronic Diseases:</label>
                <textarea
                  id="chronicdiseases"
                  name="chronicdiseases"
                  value={session.chronicdiseases}
                  onChange={handleChange}
                  required={sessionCount <= 1}
                />
                <label htmlFor="surgical">Surgical:</label>
                <textarea
                  id="surgical"
                  name="surgical"
                  value={session.surgical}
                  onChange={handleChange}
                  required={sessionCount <= 1}
                />
                <label htmlFor="allergy">Allergy:</label>
                <input
                  type="text"
                  id="allergy"
                  name="allergy"
                  value={session.allergy}
                  onChange={handleChange}
                  required={sessionCount <= 1}
                />
              </>
            )}
            <label htmlFor="xrayimage">Xray:</label>
            <input
              type="file"
              name="xrayimage"
              id="xrayimage"
              onChange={handleImage}
            />
            <button type="submit" className="btnSave">
              Save
            </button>
          </div>
        </form>
        )}
        {latestSession && isDone && (
          <div className={style.getNures}>
            <form>
              <div className={style.vitalSigns}>
                <label htmlFor="systolic">Blood Pressure:</label>
                <input
                  type="text"
                  id="systolic"
                  name="systolic"
                  value={latestSession.systolic}
                  className={getStyleForBlood1()}
                  required
                />
                <label htmlFor="diastolic">/</label>
                <input
                  type="text"
                  id="diastolic"
                  name="diastolic"
                  value={latestSession.diastolic}
                  className={getStyleForBlood2()}
                  required
                />
                <label htmlFor="pulse">Pulse:</label>
                <input
                  type="text"
                  id="pulse"
                  name="pulse"
                  value={latestSession.pulse}
                  className={getStyleForPulse()}
                  required
                />
                <label htmlFor="temperature">Temperature:</label>
                <input
                  type="text"
                  id="temperature"
                  name="temperature"
                  value={latestSession.temperature}
                  className={getStyleForTemperature()}
                  required
                />
                <label htmlFor="respiration">Respiration:</label>
                <input
                  type="text"
                  id="respiration"
                  name="respiration"
                  value={latestSession.respiration}
                  className={getStyleForRespiration()}
                  required
                />
                <label htmlFor="o2sat">O2sat:</label>
                <input
                  type="text"
                  id="o2sat"
                  name="o2sat"
                  value={latestSession.o2sat}
                  className={getStyleForO2Sat()}
                  required
                />
              </div>
              <div className={style.row}>
                <div className={style.row}>
                  <label htmlFor="height">Height</label>
                  <input
                    type="text"
                    id="height"
                    name="height"
                    value={latestSession.height}
                    required
                  />
                </div>
                <div className={style.row}>
                  <label htmlFor="weight">Weight</label>
                  <input
                    type="text"
                    id="weight"
                    name="weight"
                    value={latestSession.weight}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="story">Story:</label>
                <textarea
                  id="story"
                  name="story"
                  value={latestSession.story}
                  required
                />
                <div>
                      <label htmlFor="story">Xra image:</label>
                 <img src={latestSession.xrayimage.url} alt="" />
                </div>
                {sessionCount <= 1 && (
                  <>
                    <label htmlFor="chronicdiseases">Chronic Diseases:</label>
                    <textarea
                      id="chronicdiseases"
                      name="chronicdiseases"
                      value={latestSession.chronicdiseases}
                      required={sessionCount <= 1}
                    />
                    <label htmlFor="surgical">Surgical:</label>
                    <textarea
                      id="surgical"
                      name="surgical"
                      value={latestSession.surgical}
                      required={sessionCount <= 1}
                    />
                    <label htmlFor="allergy">Allergy:</label>
                    <input
                      type="text"
                      id="allergy"
                      name="allergy"
                      value={latestSession.allergy}
                      required={sessionCount <= 1}
                    />
                    
                    
                    
                    
                  </>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default CreatSession;
