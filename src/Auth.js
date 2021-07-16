import { useEffect, useState } from "react";
import { adminFirebaseAuth } from "./services/config";
import React from "react";

export const AuthContext = React.createContext();

export const Auth = ({ children }) => {
  const [currentStatus, setCurrentStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const status = adminFirebaseAuth.onAuthStateChanged((user) => {
      setCurrentStatus(user);
      setLoading(false);
    });

    return status;
  }, []);

  return (
    <AuthContext.Provider value={{ currentStatus }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
