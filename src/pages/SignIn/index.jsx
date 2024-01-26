import { Container, Form, Background } from "./style";
import { Input } from "../../components/Input/index.jsx";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button/index.jsx";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth.jsx";

export const SainIn = () => {
    const data = useAuth()
    console.log(data)

    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salver e gerenciar seus link úteis</p>

                <h2>Faça seu login</h2>
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
                <Button title="Entrar" />
                 
                <Link to="register">
                    Criar conta
                </Link>
            </Form>
            <Background />
        </Container>
    );
};