import React from "react";
import { Authcontext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = {};

  return <Authcontext value={authInfo}>{children}</Authcontext>;
};

export default AuthProvider;
