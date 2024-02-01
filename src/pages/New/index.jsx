import { Container, Form } from "./style";
import { Header } from "../../components/Header/index.jsx";
import { Input } from "../../components/Input/index.jsx";
import { TextArea } from "../../components/TextArea/index.jsx";
import { NoteItem } from "../../components/NoteItem/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api.js";
import { UseAuth } from "../../hooks/auth.jsx";

export const New = () => {
  const { user } = UseAuth();
  console.log(user.id);

  const [title, setTitle] = useState("");
  const [descriptions, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTags, setNewTags] = useState("");

  const navigate = useNavigate();

  const handleAddLink = () => {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  };

  const handleRemoveLink = (deleted) => {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  };

  const handleAddTags = () => {
    setTags((prevState) => [...prevState, newTags]);
    setNewTags("");
  };

  const handleRemoveTag = (deleted) => {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  };

  const handleNewNote = async () => {
    if (!title) {
      return alert("Digite o título da nota");
    }

    if (newLink) {
      return alert(
        "Você deixou um Link no campo para adicionar, mas não calico em adicionar."
      );
    }
    if (newTags) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não calico em adicionar."
      );
    }

    await api.post(`/notes/${user.id}`, {
      title,
      descriptions,
      tags,
      links,
    });
    alert("Nota cadastrado com sucesso");
    navigate(-1);
  };

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}

            <NoteItem
              isNew
              placeholder="Novo Link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tags, index) => (
                <NoteItem
                  key={String(index)}
                  value={tags}
                  onClick={() => handleRemoveTag(tags)}
                />
              ))}
              <NoteItem
                isNew
                placeholder="Nova Tag"
                onChange={(e) => setNewTags(e.target.value)}
                value={newTags}
                onClick={handleAddTags}
              />
            </div>
          </Section>

          <Button title="Salvar nota" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
};
