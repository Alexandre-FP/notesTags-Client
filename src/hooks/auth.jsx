import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({}); // distribuido os dados do usuario com toda a minha aplicação

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({})

  const signIn = async ({ email, password }) => {
    try {
      const response = await api.post("/login", { email, password });
      const { session, token }  = response.data.content
      
      api.defaults.headers.authorization = `Bearer ${ token }`
      setData({ session, token })

    } catch (error) {
      if(error.response){
        alert(error.response.data.menssage)
      }else{
        alert("Não foi pssível entrar")
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ signIn, user: data.user }} 
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
