import { Container, Form } from "./style";
import { Header } from "../../components/Header/index.jsx";
import { Input } from "../../components/Input/index.jsx";
import { TextArea } from "../../components/TextArea/index.jsx";
import { NoteItem } from "../../components/NoteItem/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { Link } from "react-router-dom";

export const New = () => {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to="/">
                            voltar
                        </Link>
                    </header>

                    <Input 
                        placeholder="Título"
                    />
                    <TextArea placeholder="Observações" /> 

                    <Section title="Links úteis">
                        <NoteItem value="https://app.rocketseat.com.br/"/>
                        <NoteItem isNew placeholder="Novo Link"/>
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">

                        <NoteItem value="React"/>
                        <NoteItem isNew placeholder="Nova Tag"/>
                        </div>
                    </Section>

                    <Button title="Salvar nota"/>
                </Form>
            </main>
        </Container>
    );
}