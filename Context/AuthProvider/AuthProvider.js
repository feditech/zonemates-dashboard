import React, { createContext, useState, useEffect } from "react";
import { auth, onAuthStateChanged } from "../../Firebase";
export const AuthContext = createContext({
  user: null,
});

function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  useEffect(() => {
    const IsLoggedin = window.localStorage.getItem("isLoggedIn")
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("hereww Auth context got user");
        setUser(user);
        window.localStorage.setItem("isLoggedIn", true);
      } else {
        setUser(null)
      }
    });

    return () =>IsLoggedin ? null : unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
