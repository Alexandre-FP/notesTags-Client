import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({}); // distribuido os dados do usuario com toda a minha aplicação

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({
    session: null,
    token: null,
  })

  const signIn = async ({ email, password }) => {
    try {
      const response = await api.post("/login", { email, password });
      const { session, token }  = response.data.content
      
      localStorage.setItem("session", JSON.stringify(session)) // setando minha sessão e meu token no localstorage
      localStorage.setItem("token", token) 

      api.defaults.headers.common['Authorization'] = `Bearer ${ token }` 
      setData({ session, token })

    } catch (error) {
      if(error.response){
        alert(error.response.data.menssage)
      }else{
        alert("Não foi pssível entrar")
      }
    }
  };

  function signOut(){
    localStorage.clear()
    setData({ session: null, token: null });
  }

  async function atualizarUsuario({ session, avatarFile }){
    try{

      if(avatarFile){ 
        const fileForm = new FormData();
        fileForm.append("avatar", avatarFile) 
 
        const response = await api.patch("/avatar", fileForm) 
        session.avatar = response.data.content.avatar 
      }

      await api.put(`/user/${session.id}`, session)  
      localStorage.setItem("session", JSON.stringify(session)) 
      setData({ session, token: data.token }); 
      alert("Perfil atualizado com sucesso");  
    }catch (error) {  
      if(error.response){
        alert(error.response.data.menssage)
      }else{
        alert("Não foi possível atualizar o perfil")
      }
    }
  }

  useEffect(() => { 
    const token = localStorage.getItem("token");
    const session = localStorage.getItem("session");

    if(token && session){
      api.defaults.headers.common['Authorization'] = `Bearer ${ token }` 

      setData({
        token, 
        session: JSON.parse(session)
      })
    }

  }, [])

  return (
    <AuthContext.Provider value={{ signIn, user: data.session, signOut, atualizarUsuario }} >
      {children}
    </AuthContext.Provider>
  );
}; 

const UseAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, UseAuth };
