import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./style.js";

export const Header = () => {
    return (
        <Container>
          <Profile to="/profile">
            <img
              src="https://github.com/Alexandre-FP.png"
              alt="Foto do usuário"
            />
    
            <div>
              <span>Bem-vindo</span>
              <strong>Rodrigo Gonçalves</strong>
            </div>
          </Profile>
    
          <Logout>
            <RiShutDownLine />
          </Logout>
        </Container>
      )
}