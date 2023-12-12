import { Container } from "./style";

export const Input = ({ icon: Icon, ...rest }) => {
    return (
        <Container>
            {Icon && <Icon size={20} /> }
            <input  { ...rest }  />
        </Container> 
    );
}