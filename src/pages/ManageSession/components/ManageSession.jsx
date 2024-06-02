import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import style from "./ManageSession.module.css";
import Navbar from "../../../components/Navbar/Navbar";
import Swal from "sweetalert2";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { useSession } from "../../../context/SessionCont";
import { useForms } from "../../../hooks/useForms";
const patientid = localStorage.getItem("patientId");

const PrintableReport = React.forwardRef((props, ref) => (
  <div ref={ref} className={style.printArea}>
    <h2>Medical Report</h2>
    <p>
      <strong>Patient Id:</strong> {patientid}
    </p>
    <p>
      <strong>Primary Diagnosis:</strong> {props.data.preliminarydiagnosis}
    </p>
    <p>
      <strong>Request Diagnostic Procedures:</strong>{" "}
      {props.data.diagnosticprocedures}
    </p>
    <p>
      <strong>Final Diagnosis:</strong> {props.data.finaldiagnosis}
    </p>
    <p>
      <strong>Care Plan:</strong> {props.data.treetmentplan}
    </p>
  </div>
));

function ManageSession() {
  const { sessionData } = useSession();

  const sessionid = localStorage.getItem("Createidsession");
  const token = localStorage.getItem("UserToken");

  const componentRef = useRef(); // Reference to the component to be printed

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const { managing, setManagingSession } = useForms();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setManagingSession({
      ...managing,
      [name]: value,
    });
  };
  console.log(sessionid);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting data:", managing);
      const { data } = await axios.post(
        `http://localhost:5000/api/managingincounter/${sessionid}`,
        managing,
        {
          headers: { token },
        }
      );
      console.log("Response data:", data);
      localStorage.setItem("mssesionid", data._id);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error(
        "Error submitting data:",
        error.response ? error.response.data : error.message
      );
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error",
        text: error.response
          ? error.response.data.message
          : "An error occurred",
        showConfirmButton: true,
      });
    }
  };

  return (
    <>
      <div className={style.managSession}>
        <Navbar />
        <form className={style.managSessionForm} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="primaryDiagnosis">Primary Diagnosis:</label>
            <input
              type="text"
              id="primaryDiagnosis"
              name="preliminarydiagnosis"
              value={managing.preliminarydiagnosis}
              onChange={handleChange}
              required
            />
            <label htmlFor="requestDiagnosticProcedures">
              Request Diagnostic Procedures:
            </label>
            <textarea
              id="requestDiagnosticProcedures"
              name="diagnosticprocedures"
              value={managing.diagnosticprocedures}
              onChange={handleChange}
              required
            />
            <label htmlFor="finalDiagnosis">Final Diagnosis:</label>
            <input
              type="text"
              id="finalDiagnosis"
              name="finaldiagnosis"
              value={managing.finaldiagnosis}
              onChange={handleChange}
              required
            />
            <label htmlFor="carePlan">Care Plan:</label>
            <textarea
              id="carePlan"
              name="treetmentplan"
              value={managing.treetmentplan}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Save</button>
        </form>
        <div className={style.rowBtn}>
          <button>
            <Link to="/Anotaion">
              <svg
                fill="#5072a7"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="35px"
                height="35px"
                viewBox="-15.2 -15.2 182.35 182.35"
                xmlSpace="preserve"
                stroke="#006b89"
                strokeWidth="0.607808"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="8.509312000000001"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path d="M125.699,5.978c-14.63-12.186-24.597-2.889-29.202,2.818c-6.01,7.442-3.151,18.017,0.332,22.386 c2.222,2.78,3.734,5.218,4.739,7.398c-2.059,0.402-4.441,1.278-6.949,3.059c-9.057,6.438-15.289,21.024-18.641,43.566 c-3.356-22.542-9.581-37.128-18.637-43.566c-2.509-1.789-4.884-2.662-6.952-3.064c1.006-2.181,2.509-4.613,4.739-7.393 c3.479-4.369,6.344-14.944,0.336-22.386C50.854,3.089,40.89-6.208,26.259,5.978C14.089,16.121-3.864,46.462,13.116,68.02 c5.591,7.095,19.577,16.692,36.081,1.428c0,0,8.667-9.513,2.059-17.831c-1.23-1.551-2.178-3.374-2.418-5.589 c1.232,0.221,2.706,0.7,4.414,1.981c5.02,3.762,12.136,14.223,15.761,42.536c-8.208,2.02-14.131,7.453-14.131,13.894 c0,6.981,6.938,12.811,16.227,14.358c0.276,8.722,0.332,18.348,0.036,29.28l-0.101,3.875h9.848l-0.101-3.875 c-0.295-10.922-0.239-20.559,0.035-29.28c9.278-1.537,16.222-7.365,16.222-14.358c0-6.44-5.92-11.874-14.126-13.894 c3.626-28.313,10.756-38.769,15.762-42.536c1.719-1.281,3.196-1.771,4.416-1.989c-0.238,2.224-1.176,4.052-2.418,5.604 c-6.608,8.312,2.058,17.83,2.058,17.83c16.506,15.264,30.49,5.667,36.084-1.428C155.823,46.462,137.87,16.121,125.699,5.978z"></path>
                    </g>
                  </g>
                </g>
              </svg>
              Annotating
            </Link>
          </button>
          <button onClick={handlePrint}>
            <svg
              fill="#5072a7"
              width="35px"
              height="35px"
              viewBox="-3 -3 36.00 36.00"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#5072a7"
              strokeWidth="0.5399999999999999"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M20.5 11h2c.277 0 .5.223.5.5s-.223.5-.5.5h-2c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-9 0h2c.277 0 .5.223.5.5s-.223.5-.5.5h-2c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm10 8c-.828 0-1.5.672-1.5 1.5S20.672 22 21.5 22s1.5-.672 1.5-1.5S22.328 19 21.5 19zm-14 0c-.828 0-1.5.672-1.5 1.5S6.672 22 7.5 22s1.5-.672 1.5-1.5S8.328 19 7.5 19zM25 4H7C5.897 4 5 4.897 5 6v6h2V6h16v6h2V6C27 4.897 26.103 4 25 4zM26 12H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h3v4h14v-4h3c1.103 0 2-.897 2-2v-8C28 12.897 27.103 12 26 12zM19 24H13v-5h6V24z"></path>
              </g>
            </svg>
            Printing a medical report
          </button>
        </div>
        <PrintableReport ref={componentRef} data={managing} />
      </div>
    </>
  );
}

export default ManageSession;
