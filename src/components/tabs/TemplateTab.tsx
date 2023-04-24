import { Dispatch, FC, SetStateAction, useMemo } from 'react'

import S from './tabsStyles.module.scss'

interface Props {
  name: string
  select: string
  setSelect: Dispatch<SetStateAction<string>>
}

const TemplateTab: FC<Props> = ({ name, select, setSelect }) => {
  const selected = useMemo(() => {
    if (select === name) return true

    return false
  }, [select])

  return (
    <div
      className={`${S.content} ${selected ? S.selected : ''}`}
      data-replace={name}
      onClick={() => setSelect(name)}
    >
      <p className={S.text}>{name}</p>
    </div>
  )
}

export default TemplateTab
