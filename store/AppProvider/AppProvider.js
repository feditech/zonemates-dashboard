import React, { createContext, useEffect, useState, useContext } from "react";
import { onAuthStateChanged, auth, db } from "../../Firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../AuthProvider/AuthProvider";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      console.log("herre");
      onSnapshot(doc(db, "users", user.uid), (doc) => {
        setUserData(doc.data());
      });
    } else {
      setUserData(null);
    }
  }, [user]);
  return <AppContext.Provider value={{userData}}>{children}</AppContext.Provider>;
};

export default AppProvider;
