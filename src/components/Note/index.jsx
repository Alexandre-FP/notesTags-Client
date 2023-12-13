import { Container } from './style.js'
import { Tags } from '../Tags/index.jsx'

export const Note = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tags key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}