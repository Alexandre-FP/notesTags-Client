import { Container } from "./style";

export const TextArea = ({ value, ...rest }) => {
    return(
        <Container { ...rest }>
            {value}
        </Container>
    );
}