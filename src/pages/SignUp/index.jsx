import { Container, Form, Background } from "./style";
import { Input } from "../../components/Input/index.jsx";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button/index.jsx";
import { Link } from "react-router-dom";

export const SignUp = () => {
    return(
        <Container>
                <Background />
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salver e gerenciar seus link úteis</p>

                <h2>Crie sua conta</h2>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />
                <Input  
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />
                <Button title="Cadastrar" />
                
                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>
        </Container>
    );
};