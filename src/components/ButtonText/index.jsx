import { Container } from "./style";

export const ButtonText = ({ tilte, ...rest }) => {
    return (   
        <Container 
            type="button"
            {...rest}
        >
            { tilte }
        </Container>
    ); 
}