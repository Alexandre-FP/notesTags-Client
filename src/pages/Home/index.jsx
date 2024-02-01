import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./style.js";
import { Header } from "../../components/Header/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";
import { Input } from "../../components/Input/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Note } from "../../components/Note/index.jsx";
import { useState, useEffect } from "react";
import { api } from "../../services/api.js";
import { UseAuth } from "../../hooks/auth.jsx";

export const Home = () => {
  const { user } = UseAuth();

  const [search, setSearch ] = useState("")
  const [tags, setTags] = useState([]);
  const [notes, setNotes] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]); 

  function handleTagsSelected(tagname){
    const alreadySelected = tagsSelected.includes(tagname);
    if (alreadySelected) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagname);
      setTagsSelected(filteredTags);
    } else {
      setTagsSelected((prevState) => [...prevState, tagname]);
    }
  }

  useEffect(() => {
    const fetchTags = async () => {
      const response = await api.get(`/tags/${user.id}`);
      setTags(response.data.content); 
    };

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?user_id=${user.id}&title=${search}&tags=${tagsSelected}`);    
      setNotes(response.data);  
    }

    fetchNotes()
  },[tagsSelected, search]) // os estados que é colocado aqui no vetor quando mudar o conteudo ele vai executar o useEffect

  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" $isactive={tagsSelected.length === 0} onClick={() => handleTagsSelected("todos")}/>
        </li>
        {tags &&
          tags.map((tag) => ( 
            <li key={String(tag.id)}> 
              <ButtonText title={tag.name} onClick={() => handleTagsSelected(tag.name)} $isactive={tagsSelected.includes(tag.name)}/> 
            </li>
          ))}
      </Menu> 

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} onChange={(e) => setSearch(e.target.value)}/> 
      </Search>

      <Content>
        <Section title="Minhas Notas">
        {
            notes && notes.map(note => (
            <Note
            key={String(note.id)} 
            data={note}
            />

            ))
        }
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  );
};
