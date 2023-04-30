import { FC } from 'react'

import S from './tabsStyles.module.scss'
import { TemplateTab } from './TemplateTab'

const Tabs: FC = () => {
  return (
    <menu className={S.container}>
      <TemplateTab name="Inicio" path="/" />
      <TemplateTab name="Projetos" path="/projects" />
      <TemplateTab name="Contato" path="/contacts" />
    </menu>
  )
}

export default Tabs
