import Image from 'next/image'
import { Dispatch, FC, SetStateAction } from 'react'

import flipIcon from '../../../../../public/assets/images/flip-icon.png'
import Title from '../title/Title'
import S from './faceStyle.module.scss'

interface IProps {
  setFlipCard: Dispatch<SetStateAction<boolean>>
  name: string
  description: string
  image: string
  type: string
}

const Face: FC<IProps> = ({ setFlipCard, name, description, image, type }) => {
  return (
    <div className={S.container}>
      <Image src={image} alt="projeto" width={200} height={50} />
      <div className={S.info}>
        <Title {...{ name, description, type }} />
        <div className={S.details}>
          <button onClick={() => setFlipCard(true)}>
            Mais detalhes
            <Image src={flipIcon} alt="icon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Face
