import React, { createContext, useState, useContext } from 'react';

// Correct the context name here
const SessionContext = createContext();

// Export the context and provider
export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ children }) => {
    const [sessionData, setSessionData] = useState({});

    const updateSessionData = (data) => {
      setSessionData(data);
    }

    return (
        // Correct the context name here
        <SessionContext.Provider value={{ sessionData, updateSessionData }}>
          {children}
        </SessionContext.Provider>
    );
}
