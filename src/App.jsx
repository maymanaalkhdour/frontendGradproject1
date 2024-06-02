import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import viteLogo from "/vite.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Link } from 'react-router-dom';
import Register from "./pages/Register/components/Register";
import About from "./pages/About/components/About";
import Root from "./routes/Root";
import NotFound from "./pages/NotFound/components/NotFound";
import Login from "./pages/Login/components/Login";
import ManageSession from "./pages/ManageSession/components/ManageSession";
import CreatSession from "./pages/CreatSession/components/CreatSession";
import Home from "./pages/Home/components/Home";
import ManagePatientRecords from "./pages/ManagePatientRecords/components/ManagePatientRecords";
import FinancialManagement from "./pages/FinancialManagement/FinancialManagement";
import PatientAppointments from "./pages/PatientAppointments/PatientAppointments";
import PersonalDataManagement from "./pages/PersonalDataManagement/PersonalDataManagement";
import CreatPatient from "./pages/CreatPatient/components/CreatPatient";
import SecNavbar from "./components/SecNavbar/SecNavbar";
import HomeSec from "./pages/HomeSec/HomeSec";
import Navbar from "./components/Navbar/Navbar";
import ProtectedRoutesS from "./auth/ProtectedRoutesS";
import ProtectedRoutesD from "./auth/ProtectedRoutesD";
import ProtectedRoutesDandN from "./auth/ProtectedRoutesDandN";
import AllAppointment from "./pages/AllAppointment/AllAppointment";
import ShowPersonalData from "./pages/ShowPersonalData/ShowPersonalData";
import Anotaion from "./pages/Anotaion/Anotaion";
import { SessionProvider } from "./context/SessionCont";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/About",
        element: <About />,
      },

      {
        path: "Home",
        element: (
          <ProtectedRoutesDandN>
            <Home />
          </ProtectedRoutesDandN>
        ),
      },

      {
        path: "/ManageSession",
        element: (
          <ProtectedRoutesD>
            <ManageSession />
          </ProtectedRoutesD>
        ),
      },
      {
        path: "/Anotaion",
        element: (
          <ProtectedRoutesD>
            <Anotaion />
          </ProtectedRoutesD>
        ),
      },
      {
        path: "/CreatSession",
        element: (
          <ProtectedRoutesDandN>
            <CreatSession />
          </ProtectedRoutesDandN>
        ),
      },
      {
        path: "/ManagePatientRecords",
        element: (
          <ProtectedRoutesDandN>
            <ManagePatientRecords />
          </ProtectedRoutesDandN>
        ),
      },
      {
        path: "/Register",
        element: (
          <ProtectedRoutesS>
            <Register />
          </ProtectedRoutesS>
        ),
      },
      {
        path: "/CreatPatient",
        element: (
          <ProtectedRoutesS>
            <CreatPatient />
          </ProtectedRoutesS>
        ),
      },
      {
        path: "PersonalDataManagement",
        element: (
          <ProtectedRoutesS>
            <PersonalDataManagement />
          </ProtectedRoutesS>
        ),
      },
      {
        path: "FinancialManagement",
        element: (
          <ProtectedRoutesS>
            <FinancialManagement />
          </ProtectedRoutesS>
        ),
      },
      {
        path: "/PatientAppointments",
        element: (
          <ProtectedRoutesS>
            <PatientAppointments />
          </ProtectedRoutesS>
        ),
      },

      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/SecretariaHome",
        element: (
          <ProtectedRoutesS>
            <SecNavbar />
          </ProtectedRoutesS>
        ),
      },
      {
        path: "/Dashboard",
        element: (
          <ProtectedRoutesDandN>
            <Navbar />
          </ProtectedRoutesDandN>
        ),
      },
      {
        path: "/SecHome",
        element: (
          <ProtectedRoutesS>
            <HomeSec />
          </ProtectedRoutesS>
        ),
      },

      {
        path: "/AllAppointment",
        element: (
          <ProtectedRoutesS>
            <AllAppointment />
          </ProtectedRoutesS>
        ),
      },
      {
        path: "/ShowPersonalData",
        element: (
          <ProtectedRoutesS>
            <ShowPersonalData />
          </ProtectedRoutesS>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
