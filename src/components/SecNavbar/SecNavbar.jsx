import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import style from './SecNavbar.module.css'
// import { useNavigate } from 'react-router-dom';
function SecNavbar() {
  const timeoutRef = useRef(null);
  const navigate= useNavigate();
  const Logout = () =>{
    localStorage.removeItem('UserToken');
    // localStorage.rewoveItem('filteredAppointments');
    navigate('/login');
  }
  // const  token= localStorage.getItem('UserToken');
  
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
      window.removeEventListener('mousemove', handleUserActivity)
      window.removeEventListener('keypress', handleUserActivity);
    };
  }, []);
  
  return (

    <div className={style.container}>
    <div className={style.secBlocks}>
      <div className={style.block}>

        <Link to="/SecHome" className={style.icon}>

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
        <Link to="/CreatPatient"className={style.icon}>
        <svg
              width="35px"
              height="35px"
              viewBox="-2.4 -2.4 28.80 28.80"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>file_new_fill</title>{" "}
                <g
                  id="页面-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g id="File" transform="translate(-336.000000, -144.000000)">
                    {" "}
                    <g
                      id="file_new_fill"
                      transform="translate(336.000000, 144.000000)"
                    >
                      {" "}
                      <path
                        d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                        id="MingCute"
                        fill-rule="nonzero"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M12,2 L12,8.5 C12,9.27969882 12.5949121,9.920449 13.3555442,9.99313345 L13.5,10 L20,10 L20,20 C20,21.0543909 19.18415,21.9181678 18.1492661,21.9945144 L18,22 L6,22 C4.94563773,22 4.08183483,21.18415 4.00548573,20.1492661 L4,20 L4,4 C4,2.94563773 4.81587733,2.08183483 5.85073759,2.00548573 L6,2 L12,2 Z M12,11.5 C11.48715,11.5 11.0644908,11.886027 11.0067275,12.3833761 L11,12.5 L11,14 L9.5,14 C8.94772,14 8.5,14.4477 8.5,15 C8.5,15.51285 8.88604429,15.9355092 9.38337975,15.9932725 L9.5,16 L11,16 L11,17.5 C11,18.0523 11.4477,18.5 12,18.5 C12.51285,18.5 12.9355092,18.113973 12.9932725,17.6166239 L13,17.5 L13,16 L14.5,16 C15.0523,16 15.5,15.5523 15.5,15 C15.5,14.48715 15.113973,14.0644908 14.6166239,14.0067275 L14.5,14 L13,14 L13,12.5 C13,11.9477 12.5523,11.5 12,11.5 Z M14,2.04336 C14.3222,2.11158 14.624049,2.25868408 14.8774606,2.47305359 L15,2.58579 L19.4142,7 C19.6506857,7.23646857 19.8218571,7.52605551 19.9160012,7.8407123 L19.9566,8 L14,8 L14,2.04336 Z"
                        id="形状"
                        fill="#5072a7"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          <h2>Create New Patient File</h2>
          </Link>
      </div>
      <div className={style.block}>
        <Link to="/PatientAppointments"className={style.icon}>
        <svg
              version="1.0"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="30px"
              height="30px"
              viewBox="-6.4 -6.4 76.80 76.80"
              enable-background="new 0 0 64 64"
              xml:space="preserve"
              fill="#5072a7"
              stroke="#5072a7"
              stroke-width="1.408"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="2.944"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path
                    fill="#5072a7"
                    d="M11,54h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C10,53.553,10.447,54,11,54 z M12,49h4v3h-4V49z"
                  ></path>{" "}
                  <path
                    fill="#5072a7"
                    d="M23,54h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C22,53.553,22.447,54,23,54 z M24,49h4v3h-4V49z"
                  ></path>{" "}
                  <path
                    fill="#5072a7"
                    d="M35,54h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C34,53.553,34.447,54,35,54 z M36,49h4v3h-4V49z"
                  ></path>{" "}
                  <path
                    fill="#5072a7"
                    d="M11,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C10,42.553,10.447,43,11,43 z M12,38h4v3h-4V38z"
                  ></path>{" "}
                  <path
                    fill="#5072a7"
                    d="M23,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C22,42.553,22.447,43,23,43 z M24,38h4v3h-4V38z"
                  ></path>{" "}
                  <path
                    fill="#5072a7"
                    d="M35,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C34,42.553,34.447,43,35,43 z M36,38h4v3h-4V38z"
                  ></path>{" "}
                  <path
                    fill="#5072a7"
                    d="M47,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C46,42.553,46.447,43,47,43 z M48,38h4v3h-4V38z"
                  ></path>{" "}
                  <path
                    fill="#5072a7"
                    d="M11,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C10,31.553,10.447,32,11,32 z M12,27h4v3h-4V27z"
                  ></path>{" "}
                  <path
                    fill="#5072a7"
                    d="M23,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C22,31.553,22.447,32,23,32 z M24,27h4v3h-4V27z"
                  ></path>{" "}
                  <path
                    fill="#5072a7"
                    d="M35,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C34,31.553,34.447,32,35,32 z M36,27h4v3h-4V27z"
                  ></path>{" "}
                  <path
                    fill="#5072a7"
                    d="M47,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C46,31.553,46.447,32,47,32 z M48,27h4v3h-4V27z"
                  ></path>{" "}
                  <path
                    fill="#5072a7"
                    d="M60,4h-7V3c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H17V3c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H4 C1.789,4,0,5.789,0,8v52c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V8C64,5.789,62.211,4,60,4z M49,3c0-0.553,0.447-1,1-1 s1,0.447,1,1v3v4c0,0.553-0.447,1-1,1s-1-0.447-1-1V6V3z M13,3c0-0.553,0.447-1,1-1s1,0.447,1,1v3v4c0,0.553-0.447,1-1,1 s-1-0.447-1-1V6V3z M62,60c0,1.104-0.896,2-2,2H4c-1.104,0-2-0.896-2-2V17h60V60z M62,15H2V8c0-1.104,0.896-2,2-2h7v4 c0,1.657,1.343,3,3,3s3-1.343,3-3V6h30v4c0,1.657,1.343,3,3,3s3-1.343,3-3V6h7c1.104,0,2,0.896,2,2V15z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          <h2>Manage Patient Appointments</h2></Link>
      </div>
      <div className={style.block}>
        <Link to="/PersonalDataManagement" className={style.icon}>
        <svg
              width="30px"
              height="30px"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.29289 1.29289C9.48043 1.10536 9.73478 1 10 1H18C19.6569 1 21 2.34315 21 4V8C21 8.55228 20.5523 9 20 9C19.4477 9 19 8.55228 19 8V4C19 3.44772 18.5523 3 18 3H11V8C11 8.55228 10.5523 9 10 9H5V20C5 20.5523 5.44772 21 6 21H9C9.55228 21 10 21.4477 10 22C10 22.5523 9.55228 23 9 23H6C4.34315 23 3 21.6569 3 20V8C3 7.73478 3.10536 7.48043 3.29289 7.29289L9.29289 1.29289ZM6.41421 7H9V4.41421L6.41421 7ZM18 19C15.2951 19 14 20.6758 14 22C14 22.5523 13.5523 23 13 23C12.4477 23 12 22.5523 12 22C12 20.1742 13.1429 18.5122 14.9952 17.6404C14.3757 16.936 14 16.0119 14 15C14 12.7909 15.7909 11 18 11C20.2091 11 22 12.7909 22 15C22 16.0119 21.6243 16.936 21.0048 17.6404C22.8571 18.5122 24 20.1742 24 22C24 22.5523 23.5523 23 23 23C22.4477 23 22 22.5523 22 22C22 20.6758 20.7049 19 18 19ZM18 17C19.1046 17 20 16.1046 20 15C20 13.8954 19.1046 13 18 13C16.8954 13 16 13.8954 16 15C16 16.1046 16.8954 17 18 17Z"
                  fill="#5072a7"
                ></path>{" "}
              </g>
            </svg>
          <h2>Personal Data Management</h2></Link>
      </div>
      <div className={style.block} >
        <Link to="/FinancialManagement"className={style.icon}>
        <svg
              width="35px"
              height="35px"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
                  d="M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V8.5M9 9.5V8.5M9 9.5H11.0001M9 9.5C7.88279 9.49998 7.00244 9.62616 7.0001 10.8325C6.99834 11.7328 7.00009 12 9.00009 12C11.0001 12 11.0001 12.2055 11.0001 13.1667C11.0001 13.889 11 14.5 9 14.5M9 15.5V14.5M9 14.5L7.0001 14.5M14 10H17M14 20L16.025 19.595C16.2015 19.5597 16.2898 19.542 16.3721 19.5097C16.4452 19.4811 16.5147 19.4439 16.579 19.399C16.6516 19.3484 16.7152 19.2848 16.8426 19.1574L21 15C21.5523 14.4477 21.5523 13.5523 21 13C20.4477 12.4477 19.5523 12.4477 19 13L14.8426 17.1574C14.7152 17.2848 14.6516 17.3484 14.601 17.421C14.5561 17.4853 14.5189 17.5548 14.4903 17.6279C14.458 17.7102 14.4403 17.7985 14.405 17.975L14 20Z"
                  stroke="#5072a7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          <h2>Financial Management</h2></Link>
      </div>
      <div className={style.block}>
         <Link to="/Register"className={style.icon}>
         <svg
              width="30px"
              height="30px"
              viewBox="0 0 64.00 64.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="12.8"
              >
                {" "}
                <g clip-path="url(#clip0_14_1995)">
                  {" "}
                  <path
                    d="M27.865 31.758C33.5972 31.758 38.244 27.1112 38.244 21.379C38.244 15.6468 33.5972 11 27.865 11C22.1328 11 17.486 15.6468 17.486 21.379C17.486 27.1112 22.1328 31.758 27.865 31.758Z"
                    stroke="#5072a7"
                    stroke-width="3.5200000000000005"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M40 36.346C37.0313 33.3973 33.0142 31.7466 28.83 31.756H26.9C22.6831 31.756 18.6388 33.4312 15.657 36.413C12.6752 39.3948 11 43.4391 11 47.656V52.516H44.73V51.756"
                    stroke="#5072a7"
                    stroke-width="3.5200000000000005"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M48.621 38.146V46.123"
                    stroke="#5072a7"
                    stroke-width="3.5200000000000005"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M52.609 42.134H44.632"
                    stroke="#5072a7"
                    stroke-width="3.5200000000000005"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_14_1995">
                    {" "}
                    <rect
                      width="45.609"
                      height="45.516"
                      fill="white"
                      transform="translate(9 9)"
                    ></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g clip-path="url(#clip0_14_1995)">
                  {" "}
                  <path
                    d="M27.865 31.758C33.5972 31.758 38.244 27.1112 38.244 21.379C38.244 15.6468 33.5972 11 27.865 11C22.1328 11 17.486 15.6468 17.486 21.379C17.486 27.1112 22.1328 31.758 27.865 31.758Z"
                    stroke="#5072a7"
                    stroke-width="3.5200000000000005"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M40 36.346C37.0313 33.3973 33.0142 31.7466 28.83 31.756H26.9C22.6831 31.756 18.6388 33.4312 15.657 36.413C12.6752 39.3948 11 43.4391 11 47.656V52.516H44.73V51.756"
                    stroke="#5072a7"
                    stroke-width="3.5200000000000005"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M48.621 38.146V46.123"
                    stroke="#5072a7"
                    stroke-width="3.5200000000000005"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M52.609 42.134H44.632"
                    stroke="#5072a7"
                    stroke-width="3.5200000000000005"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_14_1995">
                    {" "}
                    <rect
                      width="45.609"
                      height="45.516"
                      fill="white"
                      transform="translate(9 9)"
                    ></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </g>
            </svg>
          <h2>Register</h2></Link>
      </div>
      <div className={style.block}>
        <button className={`${style.btn} ${style.icon}`} onClick={Logout} >
        <svg
              width="30px"
              height="30px"
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
          Logout</button>
      </div>
     </div>
  </div>
    
  )
}

export default SecNavbar