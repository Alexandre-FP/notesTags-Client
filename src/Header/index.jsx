import { RiShutDownLine } from "react-icons/ri";

import { Container, Profile, Logout } from "./index";

export const Header = () => {
    return(
        <Container>
            <Profile>
                <img src="https://github.com/Alexandre-FP.png" alt="Foto do usuário" />
                <div>
                    <span>Bem-vindo!</span>
                    <strong>Alexandre Fernandes</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>    
    );
}