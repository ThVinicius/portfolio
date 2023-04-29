import { FC } from 'react'

import S from './titleStyle.module.scss'

interface IProps {
  name: string
  description: string
  type: string
}

const Title: FC<IProps> = ({ name, description, type }) => {
  return (
    <div className={S.container}>
      <span>
        <h1>{name}</h1>
        <div className={S.badge}>{type}</div>
      </span>
      <h6>{description}</h6>
    </div>
  )
}

export default Title
