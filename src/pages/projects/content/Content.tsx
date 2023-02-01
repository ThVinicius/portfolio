import { FC } from 'react'
import Card from '../projectTemplate/card/Card'
import { projects } from '../data/projects'
import { Container } from './contentStyle'

const Content: FC = () => {
  return (
    <Container>
      {projects.map(
        (
          { name, description, image, type, badges, linksRepo, linksDeploy },
          index
        ) => (
          <Card
            {...{
              name,
              description,
              image,
              badges,
              type,
              linksDeploy,
              linksRepo
            }}
            key={index}
          />
        )
      )}
    </Container>
  )
}

export default Content
