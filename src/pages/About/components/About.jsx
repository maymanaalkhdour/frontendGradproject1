
import React, { useState } from 'react';
// import Footer from '../../../components/Footer/Footer';
// import Footer from '.././components/Footer/Footer'
import Footer from './../../../components/Footer/footer';
// import doctorImg from './assets/img/doctor.jpg'
// import { Outlet } from 'react-router-dom';
// import Banner from './../../../components/Banner/Banner';
// import Banner from'./../../../components/Banner/Banner';
import doctorImg from './img/doctor.jpg'
import style from './About.module.css'; 

function About() {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <>
    
     {/* <div className="mainPage"> */}
  {/* <div className="container"> */}
    {/* <h1>Welcome to Our Clinic!</h1> */}
    {/* <p className="aboutUs">We are a medical clinic specialized in providing healthcare services to patients in various fields. We are committed to providing the highest levels of care to our patients and ensuring their comfort and safety.</p> */}
  {/* </div> */}
{/* </div> */}

      <div className="mainPage">
        <div>
          <svg id="wave" style={{ transform: 'rotate(180deg)', transition: '0.3s' }} viewBox="0 0 1440 150" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgba(95, 158, 160, 1)" offset="0%" />
                <stop stopColor="rgba(102, 153, 204, 0.8549019607843137)" offset="100%" />
              </linearGradient>
            </defs>
            <path style={{ transform: 'translate(0, 0px)', opacity: 1 }} fill="url(#sw-gradient-0)" d="M0,30L48,42.5C96,55,192,80,288,77.5C384,75,480,45,576,42.5C672,40,768,65,864,82.5C960,100,1056,110,1152,100C1248,90,1344,60,1440,52.5C1536,45,1632,60,1728,67.5C1824,75,1920,75,2016,80C2112,85,2208,95,2304,82.5C2400,70,2496,35,2592,35C2688,35,2784,70,2880,90C2976,110,3072,115,3168,100C3264,85,3360,50,3456,30C3552,10,3648,5,3744,25C3840,45,3936,90,4032,102.5C4128,115,4224,95,4320,75C4416,55,4512,35,4608,37.5C4704,40,4800,65,4896,82.5C4992,100,5088,110,5184,115C5280,120,5376,120,5472,102.5C5568,85,5664,50,5760,45C5856,40,5952,65,6048,72.5C6144,80,6240,70,6336,55C6432,40,6528,20,6624,25C6720,30,6816,60,6864,75L6912,90L6912,150L6864,150C6816,150,6720,150,6624,150C6528,150,6432,150,6336,150C6240,150,6144,150,6048,150C5952,150,5856,150,5760,150C5664,150,5568,150,5472,150C5376,150,5280,150,5184,150C5088,150,4992,150,4896,150C4800,150,4704,150,4608,150C4512,150,4416,150,4320,150C4224,150,4128,150,4032,150C3936,150,3840,150,3744,150C3648,150,3552,150,3456,150C3360,150,3264,150,3168,150C3072,150,2976,150,2880,150C2784,150,2688,150,2592,150C2496,150,2400,150,2304,150C2208,150,2112,150,2016,150C1920,150,1824,150,1728,150C1632,150,1536,150,1440,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"></path>
          </svg>
        </div>
        <div className="container">
          <h1>Welcome to Our Clinic!</h1>

        <div className={style.doctorSec}>
          <div className={style.doctorInfo}>
          <p>{isEnglish ? 
            "Welcome to our nephrology clinic, where we specialize in comprehensive kidney care. Our services encompass the diagnosis, treatment, and monitoring of various kidney disorders, including acute and chronic kidney diseases, hereditary kidney conditions such as kidney cysts, and renal complications associated with diabetes and hypertension. We provide personalized care for kidney transplant patients, monitor bone density diseases, and address thyroid disorders often accompanying chronic kidney failure and dialysis. Additionally, we offer expertise in managing anemia related to kidney failure, reducing the recurrence of kidney stones through clinical intervention, and diagnosing and treating urinary tract infections. At our clinic, we prioritize patient well-being and strive to deliver the highest standard of care tailored to each individual's needs." 
            : 
            "مرحبًا بكم في عيادتنا لأمراض الكلى، حيث نتخصص في تقديم رعاية شاملة للكلى. تتضمن خدماتنا التشخيص والعلاج والمتابعة لمختلف اضطرابات الكلى، بما في ذلك الأمراض الكلوية الحادة والمزمنة، والحالات الكلوية الوراثية مثل تكيس الكلى، والمضاعفات الكلوية المرتبطة بالسكري وارتفاع ضغط الدم. نقدم رعاية مخصصة لمرضى زراعة الكلى، ونراقب أمراض هشاشة العظام، ونعالج اضطرابات الغدة الدرقية التي غالباً ما تصاحب فشل الكلى المزمن والغسيل الكلوي. بالإضافة إلى ذلك، نقدم خبرتنا في إدارة فقر الدم المرتبط بفشل الكلى، وتقليل تكرار حصى الكلى من خلال التدخل السريري، وتشخيص وعلاج التهابات المسالك البولية. في عيادتنا، نولي اهتمامًا بصحة المريض ونسعى جاهدين لتقديم أعلى مستوى من الرعاية مصممة خصيصًا لتلبية احتياجات كل فرد"}
          </p>
          <button onClick={toggleLanguage}>Translate</button>
          </div>
          <div className={style.doctorImg}>
            <img src={doctorImg} alt="" />
          </div>

        </div></div>

        <svg id="wave" style={{ transform: 'rotate(0deg)', transition: '0.3s' }} viewBox="0 0 1440 110" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgba(95, 158, 160, 1)" offset="0%" />
                <stop stopColor="rgba(102, 153, 204, 0.8549019607843137)" offset="100%" />
              </linearGradient>
            </defs>
            <path style={{ transform: 'translate(0, 0px)', opacity: 1 }} fill="url(#sw-gradient-0)" d="M0,30L48,42.5C96,55,192,80,288,77.5C384,75,480,45,576,42.5C672,40,768,65,864,82.5C960,100,1056,110,1152,100C1248,90,1344,60,1440,52.5C1536,45,1632,60,1728,67.5C1824,75,1920,75,2016,80C2112,85,2208,95,2304,82.5C2400,70,2496,35,2592,35C2688,35,2784,70,2880,90C2976,110,3072,115,3168,100C3264,85,3360,50,3456,30C3552,10,3648,5,3744,25C3840,45,3936,90,4032,102.5C4128,115,4224,95,4320,75C4416,55,4512,35,4608,37.5C4704,40,4800,65,4896,82.5C4992,100,5088,110,5184,115C5280,120,5376,120,5472,102.5C5568,85,5664,50,5760,45C5856,40,5952,65,6048,72.5C6144,80,6240,70,6336,55C6432,40,6528,20,6624,25C6720,30,6816,60,6864,75L6912,90L6912,150L6864,150C6816,150,6720,150,6624,150C6528,150,6432,150,6336,150C6240,150,6144,150,6048,150C5952,150,5856,150,5760,150C5664,150,5568,150,5472,150C5376,150,5280,150,5184,150C5088,150,4992,150,4896,150C4800,150,4704,150,4608,150C4512,150,4416,150,4320,150C4224,150,4128,150,4032,150C3936,150,3840,150,3744,150C3648,150,3552,150,3456,150C3360,150,3264,150,3168,150C3072,150,2976,150,2880,150C2784,150,2688,150,2592,150C2496,150,2400,150,2304,150C2208,150,2112,150,2016,150C1920,150,1824,150,1728,150C1632,150,1536,150,1440,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"></path>
          </svg>

        <Footer/>
      </div>
    </>
  ) 
}

export default About;