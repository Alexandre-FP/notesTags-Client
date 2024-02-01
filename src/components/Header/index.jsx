import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./style.js";
import { UseAuth } from "../../hooks/auth.jsx";
import avatarDefault from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api.js";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { signOut, user } = UseAuth(); 
  const navigate = useNavigate()
  
  function handleSignOut(){
    navigate("/");
    signOut();
  }
  
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/file/${user.avatar}` : avatarDefault
  
    return (
        <Container>
          <Profile to="/profile">
            <img
              src={avatarUrl}
              alt={user.name}
            />
    
            <div>
              <span>Bem-vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
    
          <Logout onClick={handleSignOut}>     
            <RiShutDownLine />
          </Logout>
        </Container>
      )
}