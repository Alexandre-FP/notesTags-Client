import { Container } from "./style";

export const ButtonText = ({ tilte, isActive = false, ...rest }) => {
    return (   
        <Container 
            type="button"
            $isactive={isActive.toString()}
            {...rest}
        >
            { tilte } 
        </Container>
    ); 
} 