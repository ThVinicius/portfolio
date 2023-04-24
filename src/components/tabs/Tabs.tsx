'use client'

import { useRouter } from 'next/navigation'
import { FC, useEffect, useState } from 'react'

import S from './tabsStyles.module.scss'
import TemplateTab from './TemplateTab'

const Tabs: FC = () => {
  const [select, setSelect] = useState<string>('Inicio')
  const router = useRouter()

  useEffect(() => {
    const navTab: { [key: string]: string } = {
      Inicio: '/',
      Projetos: 'projects',
      Contato: 'contacts'
    }

    const currentTab = select

    router.push(navTab[currentTab])
  }, [select])

  return (
    <menu className={S.container}>
      <TemplateTab name="Inicio" select={select} setSelect={setSelect} />
      <TemplateTab name="Projetos" select={select} setSelect={setSelect} />
      <TemplateTab name="Contato" select={select} setSelect={setSelect} />
    </menu>
  )
}

export default Tabs
