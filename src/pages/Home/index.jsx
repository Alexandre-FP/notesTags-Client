import { FiPlus, FiSearch } from "react-icons/fi"
import { Container, Brand, Menu, Search, Content, NewNote } from "./style.js";
import { Header } from "../../Header/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";
import { Input } from "../../components/Input/index.jsx"

export const Home = () => {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header />

      <Menu>
        <li>
          <ButtonText tilte="Todos" isActive/>
        </li>
        <li>
          <ButtonText tilte="React" />
        </li>
        <li>
          <ButtonText tilte="NodeJS" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={ FiSearch }/>
      </Search>

      <Content></Content>

      <NewNote>
        <FiPlus/>
        Criar Nota
      </NewNote>
    </Container>
  );
};
