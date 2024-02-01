import { Container, Links, Content } from "./style.js";
import { Button } from "../../components/Button/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Tags } from "../../components/Tags/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";
import { api } from "../../services/api.js";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Details = () => {
  const [data, setData] = useState(null);

  const params = useParams();

  const navigate = useNavigate();


  function handleBack() {
    navigate(-1);
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente excluir a nota")

    if(confirm){
      await api.delete(`/notes/deletar/${params.id}`); 
      navigate(-1);
    } 
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/buscar/${params.id}`);
      setData(response.data);
      console.log(response.data.tags);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ButtonText title="Exluir Nota" onClick={handleRemove}  $isactive=""/>
            <h1>{data.result.title}</h1>
            <p>{data.result.descriptions}</p>
            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blanck">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}
            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tags key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}
            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  );
};
