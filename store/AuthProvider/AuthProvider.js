import React, { createContext, useState, useEffect } from "react";
import { auth } from "../../Firebase";
export const AuthContext = createContext({
  user: null,
});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  console.log(auth);
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
