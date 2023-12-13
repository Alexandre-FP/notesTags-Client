import { Container } from "./style";

export const Tags = ({ title, ...rest }) => {
    return(
        <Container { ...rest }>
        { title }
    </Container>
    )
}