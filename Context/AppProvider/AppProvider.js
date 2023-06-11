import React, { createContext, useEffect, useState, useContext } from "react";
import { onAuthStateChanged, auth, db } from "../../Firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../AuthProvider/AuthProvider";

export const AppContext = createContext({
  userData:null
});


const AppProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
     
      onSnapshot(doc(db, "users", user.uid), (doc) => {
        // console.log("get data from firebase",doc.data());
        setUserData(doc.data());
      });
    } else {
      setUserData(null);
    }
  }, [user]);
  return <AppContext.Provider value={{userData}}>{children}</AppContext.Provider>;
};

export default AppProvider;
