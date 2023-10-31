"use client";

import { useState } from "react";

function useAuthentication() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(isAuthenticated);

  const toggleAuthentication = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return { isAuthenticated, toggleAuthentication };
}

export default useAuthentication;
