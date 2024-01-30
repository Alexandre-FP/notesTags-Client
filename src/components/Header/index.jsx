import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./style.js";
import { UseAuth } from "../../hooks/auth.jsx";
import avatarDefault from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api.js";

export const Header = () => {
  const { signOut, user } = UseAuth(); 
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
    
          <Logout onClick={signOut}>     
            <RiShutDownLine />
          </Logout>
        </Container>
      )
}