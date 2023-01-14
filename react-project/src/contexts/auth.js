import axios from "axios";
import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext(0);

export const AuthenticatorProvider =  ({children}) => {
  const [user, setUser] = useState(null);
  const [loginMessage, setloginMessage] = useState("");
  const navigate = useNavigate();
  const login = async (email, password) => {

    try {
        const response = await axios.post("http://localhost:4000/auth", {
          email,
          password
        });

        if(response.status === 200){

          const user = response.data.user;
          setUser(user);
          navigate("/home");

        }

        console.log('response', response);
        console.log('user', user);



      } catch (error) {
        
        if (error.response.status === 401){
          console.log('loginMessage', loginMessage);
          setloginMessage(<p>{error.response.data.message}</p>);
          setUser(null);
        }

        console.log(error);
    }

  };



  return (
    <AuthContext.Provider
      value={{
        authenticated: Boolean(user),
        user,
        loginMessage,
        login,
      }}>
        {children}
    </AuthContext.Provider>
  );
};
