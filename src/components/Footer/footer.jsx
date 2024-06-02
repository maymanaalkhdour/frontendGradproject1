import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <div className={style.footerSection}>
          <h3>Contact Us</h3>
          <div className={style.contactsInfo}>
          <div className={style.contactInfo}>
            <Link className={style.icon} to="tel:0598769170">
              <svg
                width="25px"
                height="25px"
                viewBox="-2.4 -2.4 28.80 28.80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke=""
                strokeWidth="0.24000000000000005"
                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0">
                  <rect
                    x="-2.4"
                    y="-2.4"
                    width="28.80"
                    height="28.80"
                    rx="14.4"
                    fill="#eee"
                    strokeWidth="0"
                  ></rect>
                </g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="1.44"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                    fill="#008080"
                  ></path>
                </g>
              </svg>
            </Link>
            <p>
              <Link to="tel:0597 379 322">0597 379 322</Link>
            </p>
          </div>
          <div className={style.contactInfo}>
            <svg
              width="25px"
              height="25px"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0">
                <rect
                  x="-2.4"
                  y="-2.4"
                  width="28.80"
                  height="28.80"
                  rx="14.4"
                  fill="#eee"
                  strokeWidth="0"
                ></rect>
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
                  stroke="#008080"
                  strokeWidth="2.352"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            <p>
              <Link to="mailto:Abdalfatahshalalfeh@gmail.com">
                Abdalfatahshalalfeh@gmail.com
              </Link>
            </p>
          </div>
          <div className={style.contactInfo}>
            <svg
              fill="#008080"
              width="25px"
              height="25px"
              viewBox="-2.4 -2.4 28.80 28.80"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#008080"
              stroke-width="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="0.192"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path>{" "}
              </g>
            </svg>
            <p>
              <Link to="https://www.facebook.com/profile.php?id=100095432837198">
                Follow Us
              </Link>
            </p>
          </div>
          </div>
        </div>
        <div className={style.footerSection}>
          <h3>Working Hours</h3>
          <p>Sunday to Thursday: 9:00 AM - 5:00 PM</p>
          <p>Friday and Saturday: Closed</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;