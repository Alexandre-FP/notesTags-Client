import { Containter, Links, Content } from "./style.js";
import { Button } from "../../components/Button/index.jsx";
import { Header } from "../../Header/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Tags } from "../../components/Tags/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";

//children é muitas coisas, basicamante uma lista
export const Details = () => {
  return (
    <Containter>
      <Header />
      <main>
        <Content>
          <ButtonText tilte="Exluir Nota" />
            <h1>
              Introdução ao React
            </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio enim laborum similique odio, quos nulla saepe earum veniam autem. Exercitationem doloremque veniam consequuntur nulla distinctio, non quis expedita? Sequi?
              </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://app.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#">https://app.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tags title="Express" />
            <Tags title="NodeJs" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Containter>
  );
};
