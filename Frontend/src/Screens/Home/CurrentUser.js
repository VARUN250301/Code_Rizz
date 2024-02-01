// commonFunctions.js
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuthListener = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      if (loggedInUser) {
        setUser(loggedInUser.email);
      } else {
        setUser(null);
      }
    });

    // Cleanup: Unsubscribe the listener when the component unmounts
    return () => unsubscribe();
  }, [auth]);

  return user;
};