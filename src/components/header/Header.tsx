import { FC } from 'react'

import Tabs from '../tabs/Tabs'
import S from './headerStyles.module.scss'

const Header: FC = () => {
  return (
    <header className={S.container}>
      <Tabs />
    </header>
  )
}

export default Header
