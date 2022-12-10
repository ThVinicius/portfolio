import { FC } from 'react'
import TemplateTab from '../tabs/TemplateTab'
import Tabs from '../tabs/Tabs'
import { Container } from './headerStyles'

const Header: FC = () => {
  return (
    <Container>
      <Tabs />
    </Container>
  )
}

export default Header
