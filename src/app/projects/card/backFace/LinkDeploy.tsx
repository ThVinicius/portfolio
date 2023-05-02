import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import rocketIcon from '../../../../../public/assets/images/rocket.svg'
import S from './backFaceStyle.module.scss'

interface IProps {
  label: string
  href: string
}

export const LinkDeploy: FC<IProps> = ({ label, href }) => {
  return (
    <Link
      className={S['deploy-badge']}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <p>{label}</p>
      <Image
        src={rocketIcon}
        alt="link deploy"
        style={{ height: '35px' }}
        width={14}
      />
    </Link>
  )
}
