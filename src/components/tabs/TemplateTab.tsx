import { Dispatch, FC, SetStateAction, useMemo } from 'react'
import { Container } from './tabsStyles'

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
    <Container
      data-replace={name}
      onClick={() => setSelect(name)}
      selected={selected}
    >
      <p>{name}</p>
    </Container>
  )
}

export default TemplateTab
