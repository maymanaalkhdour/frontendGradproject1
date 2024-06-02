import React, { createContext, useState } from "react";

export const formsContext = createContext(null);

const FormsProvider = ({ children }) => {
  const [session, setSession] = useState({
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
  });
  const [managing, setManagingSession] = useState({
    preliminarydiagnosis: "",
    finaldiagnosis: "",
    diagnosticprocedures: "",
    treetmentplan: "",
  });


  return (
    <formsContext.Provider
      value={{
        session,
        setSession,
        managing,
        setManagingSession
      }}
    >
      {children}
    </formsContext.Provider>
  );
};

export default FormsProvider;
