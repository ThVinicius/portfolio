'use client'

import { FC, useMemo, useState } from 'react'

import { IProject } from 'types/projects'

import BackFace from './backFace/BackFace'
import S from './cardStyle.module.scss'
import Face from './face/Face'

export const Card: FC<Omit<IProject, 'id'>> = ({
  name,
  description,
  image,
  type,
  badges,
  links
}) => {
  const [flipCard, setFlipCard] = useState(false)

  const flip = useMemo(() => {
    if (flipCard) return 'rotateY(180deg)'

    return 'rotateY(0deg)'
  }, [flipCard])

  return (
    <div className={S.container} style={{ transform: flip }}>
      <Face {...{ setFlipCard, name, description, image, type }} />
      <BackFace
        {...{
          setFlipCard,
          name,
          description,
          type,
          badges,
          links
        }}
      />
    </div>
  )
}
