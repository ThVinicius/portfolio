import Image from 'next/image'
import { Dispatch, FC, SetStateAction } from 'react'

import flipIcon from '../../../../../public/assets/images/flip-icon.png'
import Title from '../title/Title'
import S from './backFaceStyle.module.scss'
import { LinkDeploy } from './LinkDeploy'
import { LinkRepo } from './LinkRepo'

interface IProps {
  setFlipCard: Dispatch<SetStateAction<boolean>>
  name: string
  description: string
  type: string
  badges: { name: string; image: string }[]
  links: { id: number; label: string; href: string }[]
}

const BackFace: FC<IProps> = ({
  setFlipCard,
  name,
  description,
  type,
  badges,
  links
}) => {
  return (
    <div className={S.container}>
      <div className={S.content}>
        <div className={S['btn-return']}>
          <button onClick={() => setFlipCard(false)}>
            <Image src={flipIcon} alt="icon" />
            Voltar
          </button>
        </div>
        <Title {...{ name, description, type }} />
        <div className={S.box}>
          <h2>Construído com</h2>
          <span>
            {badges.map(badge => (
              <Image
                src={badge.image}
                alt="badge icon"
                key={badge.name}
                width={14}
                height={14}
              />
            ))}
          </span>
        </div>
        <div className={S.box}>
          <h2>Links</h2>
          <span>
            {links.map(({ id, href, label }) => {
              if (label === 'Deploy') {
                return <LinkDeploy {...{ label, href }} key={id} />
              }

              return <LinkRepo {...{ label, href }} key={id} />
            })}
          </span>
        </div>
      </div>
    </div>
  )
}

export default BackFace
