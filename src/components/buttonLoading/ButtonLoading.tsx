import { FC } from 'react'

import { useButton } from './useButton'

interface IProps {
  name: string
  className: string
  loading?: boolean
}

export const ButtonLoading: FC<IProps> = ({
  name,
  className,
  loading = false
}) => {
  const { Label, opacity } = useButton(loading, name)

  return (
    <button type="submit" className={className} style={{ opacity }}>
      {typeof Label === 'string' ? (
        Label
      ) : (
        <Label color="#FFFFFF" height={20} width={99} />
      )}
    </button>
  )
}
