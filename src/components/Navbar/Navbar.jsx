import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Navbar.module.css';
import { jwtDecode } from 'jwt-decode';

function Navbar() {
  const patientid=localStorage.getItem('patientId')
  const token = localStorage.getItem('UserToken');
  const decoded = jwtDecode(token);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);
  const Logout = () => {
    localStorage.removeItem('UserToken');
    // localStorage.rewoveItem('filteredAppointments');
    navigate('/login');
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      Logout();
    }, 10 * 60 * 1000); // 5 minutes
  };

  useEffect(() => {
    resetTimeout();
    const handleUserActivity = () => {
      resetTimeout();
    };
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keypress', handleUserActivity);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keypress', handleUserActivity);
    };
  }, []);


  return (
    <div className={style.container}>
      <div className={style.doctorBlocks}>
        <div className={style.block}>
          <Link to="/Home" className={style.icon}>
          <svg
              width="30px"
              height="30px"
              viewBox="-2.8 -2.8 33.60 33.60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#5072a7"
              stroke-width="0.6719999999999999"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  clip-rule="evenodd"
                  d="M16.3382 1.94393L25.9705 9.82424L26.0201 9.8788C26.1701 10.0437 26.3998 10.3064 26.5943 10.6198C26.7798 10.9189 27 11.3686 27 11.8956V24.9976C27 26.1013 26.1068 27 25 27H18.7601C17.9317 27 17.2601 26.3284 17.2601 25.5V20.7939C17.2601 18.9948 15.8058 17.5405 14.0168 17.5405C12.2279 17.5405 10.7735 18.9948 10.7735 20.7939V25.5C10.7735 26.3284 10.102 27 9.27354 27H3C1.89318 27 1 26.1013 1 24.9976V11.7425C1 11.0901 1.36299 10.564 1.56986 10.3028C1.69049 10.1505 1.80873 10.0264 1.89631 9.94036C1.9407 9.89677 1.97877 9.86147 2.0074 9.83565C2.02175 9.8227 2.03384 9.81204 2.0433 9.80382L2.05551 9.79329L2.06007 9.7894L2.06278 9.7871C2.06278 9.7871 2.06356 9.78646 2.7075 10.5515L2.06356 9.78646L2.07352 9.77807L11.6288 1.94617C12.9452 0.685478 15.0206 0.684487 16.3382 1.94393ZM3.35246 11.3159L3.3468 11.3209C3.33673 11.33 3.31953 11.3459 3.29759 11.3674C3.25251 11.4117 3.19388 11.4736 3.13764 11.5446C3.07966 11.6178 3.038 11.6834 3.01374 11.7344C3.00661 11.7494 3.00238 11.7602 3 11.767V24.9976L3.00006 24.9992L3.0007 25H8.77354V20.7939C8.77354 17.8948 11.1188 15.5405 14.0168 15.5405C16.9149 15.5405 19.2601 17.8948 19.2601 20.7939V25H24.9993L24.9999 24.9992L25 24.9976V11.8956C25 11.8989 25.0008 11.8992 25 11.8956C24.9966 11.8812 24.9788 11.8095 24.8948 11.6742C24.8108 11.5389 24.7005 11.4037 24.588 11.2772L15.004 3.43645L14.9714 3.40439C14.4228 2.86484 13.5451 2.86525 12.997 3.40534L12.9644 3.43744L3.35246 11.3159Z"
                  fill="#5072a7"
                  fill-rule="evenodd"
                ></path>
              </g>
            </svg>
            <h2>Home Page</h2>
          </Link>
        </div>
        <div className={style.block}>
          <Link to={`/creatSession`} className={style.icon}>
          <svg
              width="35px"
              height="35px"
              viewBox="-1.5 -1.5 18.00 18.00"
              version="1.1"
              id="doctor"
              xmlns="http://www.w3.org/2000/svg"
              fill="#5072a7"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="0.6599999999999999"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5.5,7C4.1193,7,3,5.8807,3,4.5l0,0v-2C3,2.2239,3.2239,2,3.5,2H4c0.2761,0,0.5-0.2239,0.5-0.5S4.2761,1,4,1H3.5
	C2.6716,1,2,1.6716,2,2.5v2c0.0013,1.1466,0.5658,2.2195,1.51,2.87l0,0C4.4131,8.1662,4.9514,9.297,5,10.5C5,12.433,6.567,14,8.5,14
	s3.5-1.567,3.5-3.5V9.93c1.0695-0.2761,1.7126-1.367,1.4365-2.4365C13.1603,6.424,12.0695,5.7809,11,6.057
	C9.9305,6.3332,9.2874,7.424,9.5635,8.4935C9.7454,9.198,10.2955,9.7481,11,9.93v0.57c0,1.3807-1.1193,2.5-2.5,2.5S6,11.8807,6,10.5
	c0.0511-1.2045,0.5932-2.3356,1.5-3.13l0,0C8.4404,6.7172,9.001,5.6448,9,4.5v-2C9,1.6716,8.3284,1,7.5,1H7
C6.7239,1,6.5,1.2239,6.5,1.5S6.7239,2,7,2h0.5C7.7761,2,8,2.2239,8,2.5v2l0,0C8,5.8807,6.8807,7,5.5,7 M11.5,9c-0.5523,0-1-0.4477-1-1s0.4477-1,1-1s1,0.4477,1,1S12.0523,9,11.5,9z"
                ></path>{" "}
              </g>
            </svg>
            <h2>Create Encouter Session</h2>
          </Link>
        </div>
        {decoded.isDoctor ? (
          <>
            <div className={style.block}>
              <Link to="/manageSession" className={style.icon}>
              <svg
              width="35px"
              height="35px"
              viewBox="-4.8 -4.8 57.60 57.60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#5072a7"
              stroke-width="0.576"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="0.096"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.1333 22.1333C28.0381 22.1333 31.2 18.9714 31.2 15.0667C31.2 11.1619 28.0381 8 24.1333 8C20.2286 8 17.0667 11.1619 17.0667 15.0667C17.0667 18.9714 20.2286 22.1333 24.1333 22.1333ZM33.2 15.0667C33.2 20.076 29.1426 24.1333 24.1333 24.1333C19.124 24.1333 15.0667 20.076 15.0667 15.0667C15.0667 10.0573 19.124 6 24.1333 6C29.1426 6 33.2 10.0573 33.2 15.0667Z"
                  fill="#5072a7"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.1254 27.6282C17.8971 27.1604 17.3814 26.9076 16.8786 27.0312C11.4745 28.3592 6 31.0671 6 35.1407V40V42H8H40H42V40V35.1407C42 31.0671 36.5255 28.3592 31.1214 27.0312C30.6186 26.9076 30.1029 27.1604 29.8746 27.6282L25.8105 27.6282C24.9218 27.6284 24.4693 27.6284 24.0248 27.6284C23.5637 27.6283 23.1112 27.6283 22.1893 27.6285L18.1254 27.6282ZM25.8109 29.6282C25.8107 29.6282 25.8106 29.6282 25.8105 29.6282C24.9162 29.6284 24.466 29.6284 24.024 29.6284C23.5658 29.6283 23.1162 29.6283 22.1898 29.6285L22.1892 29.6285L18.1252 29.6282L16.8758 29.6281L16.6456 29.1564C14.3233 29.7829 12.1328 30.655 10.5162 31.7244C8.69262 32.9307 8 34.0995 8 35.1407V40H40V35.1407C40 34.0995 39.3074 32.9307 37.4838 31.7244C35.8672 30.655 33.6767 29.7829 31.3544 29.1564L31.1242 29.6282L29.8746 29.6282L25.8109 29.6282Z"
                  fill="#5072a7"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 34.9038C16.5384 34.9038 17 34.4601 17 33.8816C17 33.3031 16.5384 32.8594 16 32.8594C15.4616 32.8594 15 33.3031 15 33.8816C15 34.4601 15.4616 34.9038 16 34.9038ZM16 36.9038C17.6569 36.9038 19 35.5507 19 33.8816C19 32.2125 17.6569 30.8594 16 30.8594C14.3431 30.8594 13 32.2125 13 33.8816C13 35.5507 14.3431 36.9038 16 36.9038Z"
                  fill="#5072a7"
                ></path>{" "}
                <path
                  d="M15.6354 28.6117C15.4178 29.3461 15.4391 30.25 15.8901 31.3606L14.0371 32.1131C13.5935 31.0208 13.4293 29.9763 13.5293 28.9999C13.5627 28.6732 13.6258 28.3541 13.7178 28.0435L15.6354 28.6117Z"
                  fill="#5072a7"
                ></path>{" "}
                <path
                  d="M32.5348 31.496L34.476 31.9777C34.7266 30.9679 34.7789 30.0189 34.65 29.1395L32.4114 28.4784C32.743 29.284 32.8379 30.2747 32.5348 31.496Z"
                  fill="#5072a7"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31.4268 31.225C31.6053 31.0795 31.8285 31 32.0588 31H34.9412C35.1715 31 35.3947 31.0795 35.5732 31.225L37.632 32.904C37.8649 33.094 38 33.3785 38 33.679V38.0444C38 38.5967 37.5523 39.0444 37 39.0444H34.9412V37.0444H36V34.1539L34.5851 33H32.4149L31 34.1539V37.0444H32.0588V39.0444H30C29.4477 39.0444 29 38.5967 29 38.0444V33.679C29 33.3785 29.1351 33.094 29.368 32.904L31.4268 31.225Z"
                  fill="#5072a7"
                ></path>{" "}
              </g>
            </svg>
                <h2>Encounter Session Management</h2>
              </Link>
            </div>
            <div className={style.block}>
              <Link to="/managePatientRecords" className={style.icon}>
              <svg
              width="38px"
              height="38px"
              viewBox="-2.4 -2.4 28.80 28.80"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="0"
              stroke="0"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>ic_fluent_patient_24_regular</title>{" "}
                <desc>Created with Sketch.</desc>{" "}
                <g
                  id="🔍-Product-Icons"
                  stroke-width="0.00024000000000000003"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="ic_fluent_patient_24_regular"
                    fill="#5072a7"
                    fill-rule="nonzero"
                  >
                    {" "}
                    <path
                      d="M17.75,2 C18.9926407,2 20,3.00735931 20,4.25 L20,19.754591 C20,20.9972317 18.9926407,22.004591 17.75,22.004591 L6.25,22.004591 C5.00735931,22.004591 4,20.9972317 4,19.754591 L4,4.25 C4,3.05913601 4.92516159,2.08435508 6.09595119,2.00519081 L6.25,2 L17.75,2 Z M18.5,16 L5.5,16 L5.5,19.754591 C5.5,20.1688046 5.83578644,20.504591 6.25,20.504591 L17.75,20.504591 C18.1642136,20.504591 18.5,20.1688046 18.5,19.754591 L18.5,16 Z M7.75128856,17.5 L16.25,17.5 C16.6642136,17.5 17,17.8357864 17,18.25 C17,18.6296958 16.7178461,18.943491 16.3517706,18.9931534 L16.25,19 L7.75128856,19 C7.337075,19 7.00128856,18.6642136 7.00128856,18.25 C7.00128856,17.8703042 7.28344245,17.556509 7.64951801,17.5068466 L7.75128856,17.5 L16.25,17.5 L7.75128856,17.5 Z M17.75,3.5 L6.25,3.5 L6.14822944,3.50684662 C5.78215388,3.55650904 5.5,3.87030423 5.5,4.25 L5.5,14.5 L8,14.5 L8,12.2455246 C8,11.5983159 8.49187466,11.0659907 9.12219476,11.0019782 L9.25,10.9955246 L14.75,10.9955246 C15.3972087,10.9955246 15.9295339,11.4873992 15.9935464,12.1177193 L16,12.2455246 L16,14.5 L18.5,14.5 L18.5,4.25 C18.5,3.83578644 18.1642136,3.5 17.75,3.5 Z M14.5,12.4955246 L9.5,12.4955246 L9.5,14.5 L14.5,14.5 L14.5,12.4955246 Z M12,4.99552458 C13.3807119,4.99552458 14.5,6.11481271 14.5,7.49552458 C14.5,8.87623646 13.3807119,9.99552458 12,9.99552458 C10.6192881,9.99552458 9.5,8.87623646 9.5,7.49552458 C9.5,6.11481271 10.6192881,4.99552458 12,4.99552458 Z M12,6.49552458 C11.4477153,6.49552458 11,6.94323983 11,7.49552458 C11,8.04780933 11.4477153,8.49552458 12,8.49552458 C12.5522847,8.49552458 13,8.04780933 13,7.49552458 C13,6.94323983 12.5522847,6.49552458 12,6.49552458 Z"
                      id="🎨-Color"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
                <h2>Manage Patient Records</h2>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className={style.block}>
              <Link to="/managePatientRecords">
                
                <h2>Manage Patient Records</h2>
              </Link>
            </div>
          </>
        )}
        <div className={style.block}>
          <button className={`${style.btn} ${style.icon}`} onClick={Logout}>
          <svg
              width="35px"
              height="35px"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#5072a7"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M11 12H21M21 12L18.5 9.5M21 12L18.5 14.5"
                  stroke="#5072a7"
                  stroke-width="2.184"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
