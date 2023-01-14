import { FC } from 'react'
import { Link } from 'react-router-dom'
import dev from '../../../assets/images/dev.gif'
import { Box, Button, Container, Image, Label } from './contentStyles'

const Content: FC = () => {
  return (
    <Container>
      <Label>
        <h2>Vinicius Pacheco dos Santos</h2>
        <h1>Desenvolvedor Web Full Stack</h1>
        <Link
          to="/src/assets/resume/Vinicius_Pacheco dos Santos_Resume.pdf"
          target="_blank"
        >
          <Button>Download CV</Button>
        </Link>
      </Label>
      <Box>
        <Image src={dev} alt="dev gif" />
      </Box>
    </Container>
  )
}

export default Content
