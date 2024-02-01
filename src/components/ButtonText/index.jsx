import { Container } from "./style";

export const ButtonText = ({ title, isActive = false, ...rest }) => {
    return (   
        <Container 
            type="button"
            $isactive={isActive.toString()}
            {...rest}
        >
            { title } 
        </Container>
    ); 
} 