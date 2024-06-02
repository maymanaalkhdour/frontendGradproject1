import { Link } from "react-router-dom";
import style from "./Banner.module.css";
import bannerImg from "./assets/img/logoHom.jpg";

function Banner() {
  const token = localStorage.getItem('UserToken');
  return (
    <div className={style.banner}>
      <div className={style.banInf}>

      
      <nav>




        <ul>
          {
            token?
            <>
            <li>
            <Link to="/about">About</Link>
            </li>
         </>
         :
         <>
          <li>
            <Link to="/about">About</Link>
         </li>
          <li>
              <Link to="/login">Login</Link>
          </li>  
         </>
         
         

          }
         </ul>
         
         
         
         
         
         
          {/* <li>
            <Link to="/register">Register</Link>
          </li> */}
      </nav>
      <h2>NephroClinic</h2>
      </div>
      <div className={style.bannerImg}>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;
