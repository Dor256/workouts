import React, { FunctionComponent, useContext, useState } from 'react';
import { User } from '../../components/app';
import { Credentials } from '../api';

type Auth = {
  user?: User;
  login(credentials: Credentials): void;
}

const AuthContext = React.createContext<Auth>({} as Auth);

export const AuthProvider: FunctionComponent = (props) => {
  const auth = useAuthProvider();

  return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>;
};

function useAuthProvider() {
  const [user, setUser] = useState<User>();

  function login(credentials: Credentials) {
    setUser({ name: 'izo', email: credentials.email });
  }

  return {
    user,
    login
  };
}

export function useAuth() {
  return useContext(AuthContext);
}
