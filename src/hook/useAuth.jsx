import React, { use } from 'react';
import { Authcontext } from '../context/Authcontext/AuthContext';

const useAuth = () => {
  const authInfo = use(Authcontext);
return authInfo;

};

export default useAuth;