import { FC } from 'react'
import linkedin from '../../../../assets/images/linkedin.png'
import github from '../../../../assets/images/github-logo.png'
import { Container } from './contactsStyle'

const Contacts: FC = () => {
  return (
    <Container>
      <div>
        <h1>Email</h1>
        <h2>vinicioss9955@gmail.com</h2>
      </div>
      <div>
        <h1>Linkedin e GitHub</h1>
        <span>
          <a href="https://www.linkedin.com/in/thvinicius" target="_blank">
            <img src={linkedin} alt="linkedin logo" />
          </a>
          <a href="https://github.com/ThVinicius" target="_blank">
            <img src={github} alt="github logo" />
          </a>
        </span>
      </div>
    </Container>
  )
}

export default Contacts
