import { Container, Form, Avatar } from "./style.js";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Input } from "../../components/Input/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UseAuth } from "../../hooks/auth.jsx";
import avatarDefault from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api.js";

export const Profile = () => {
    const { user, atualizarUsuario } = UseAuth()

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");
    const [oldPassword, setOldPassword] = useState(""); 

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/file/${user.avatar}` : avatarDefault
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleAtualizar(){
      const session = {
        id: user.id, 
        name, 
        email,
        password: password,
        old_password: oldPassword,
      }

      await atualizarUsuario({ session, avatarFile }); 
    } 
      
    function handleAvatar(event){
      const file = event.target.files[0];
      setAvatarFile(file);
      
      const imgPreview = URL.createObjectURL(file); 
      setAvatar(imgPreview) 
    }
    console.log(user.avatar)
    return (
        <Container>
          <header>
            <Link to="/">
              <FiArrowLeft />
            </Link>
          </header>
    
          <Form>
            <Avatar>
              <img
                src={avatar}
                alt="Foto do usuário"
              /> 
              <label htmlFor="avatar">
                <FiCamera />
    
                <input
                  id="avatar"
                  type="file"
                  onChange={handleAvatar}
                />
              </label>
            </Avatar>
    
            <Input
              placeholder="Nome"
              type="text"
              icon={FiUser}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
    
            <Input
              placeholder="E-mail"
              type="text"
              icon={FiMail}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
    
            <Input
              placeholder="Senha atual"
              type="password"
              icon={FiLock} 
              onChange={(e) => setOldPassword(e.target.value)}
            />
    
            <Input
              placeholder="Nova senha"
              type="password"
              icon={FiLock}
              onChange={(e) => setPassword(e.target.value)}
            />
    
            <Button title="Salvar" onClick={handleAtualizar}/>
          </Form>
        </Container>
      );
}