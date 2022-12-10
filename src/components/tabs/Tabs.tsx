import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TemplateTab from './TemplateTab'
import { TabsContainer } from './tabsStyles'

const Tabs: FC = () => {
  const [select, setSelect] = useState<string>('Inicio')
  const navigate = useNavigate()

  useEffect(() => {
    const navTab: { [key: string]: string } = {
      Inicio: '/',
      Projetos: 'projects',
      Contato: 'contacts'
    }

    const currentTab = select

    navigate(navTab[currentTab])
  }, [select])

  return (
    <TabsContainer>
      <TemplateTab name="Inicio" select={select} setSelect={setSelect} />
      <TemplateTab name="Projetos" select={select} setSelect={setSelect} />
      <TemplateTab name="Contato" select={select} setSelect={setSelect} />
    </TabsContainer>
  )
}

export default Tabs
