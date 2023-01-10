import { createContext } from "react";
import { useState } from "react";
export const AuthContext = createContext(0);

export const AuthenticatorProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const user = { email, password };
    console.log("login", email, password);
    setUser(user);
    console.log("user", user);
  };

  const logout = () => console.log("logout");

  return (
    <AuthContext.Provider
      value={{
        authenticated: Boolean(user),
        user,
        login,
        logout,
      }}>
        {children}
    </AuthContext.Provider>
  );
};
