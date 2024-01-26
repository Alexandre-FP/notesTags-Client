import { createContext, useContext } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  return(
    <AuthContext.Provider value={{ email: "alexandrefernandes.132132@gmail.com" }}>
      {children}
    </AuthContext.Provider>
  ) 
}

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
} 

export { AuthProvider, useAuth }   