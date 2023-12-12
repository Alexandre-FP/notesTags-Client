import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export const Button = ({ title, loading = false, ...rest }) => { // propriedade explicitas
    return(
       <Container 
        type="button"
        disabled={loading}
        { ...rest } // qualuqer outra propriedade que não tenha deixado explicito, ...rest vai inserir no component
       >
        {loading ? 'Carregando...' : title}
       </Container> 
    )
}