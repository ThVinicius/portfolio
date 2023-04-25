import { FC } from 'react'

import S from './contacts.module.scss'
import { Form } from './form/Form'
import { Links } from './links/Links'

const Content: FC = () => {
  return (
    <div className={S.container}>
      <Form />
      <Links />
    </div>
  )
}

export default Content
