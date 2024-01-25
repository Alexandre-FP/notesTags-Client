import { Container, Form, Background } from "./style";
import { Input } from "../../components/Input/index.jsx";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button/index.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api.js";


export const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleSignUp = () => {
        if(!name || !email || !setPassword){
            return alert('Preencha todos os campos!')
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert('Usuário Cadastrado com sucesso')
            navigate("/")
        }).catch(error => {  
            if(error.response){
                alert(error.response.data.menssage)
            }else{
                alert('não foi possível cadastrar')
            }
        })
    }

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
                    onChange={e => setName(e.target.value)}
                />
                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input  
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button title="Cadastrar" onClick={handleSignUp}/> 
                
                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>
        </Container>
    );
};