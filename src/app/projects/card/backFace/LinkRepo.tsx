import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import githubIcon from '../../../../../public/assets/images/github.svg'
import S from './backFaceStyle.module.scss'

interface IProps {
  label: string
  href: string
}

export const LinkRepo: FC<IProps> = ({ label, href }) => {
  return (
    <Link
      className={S['github-badge']}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <p>{label}</p>
      <Image
        src={githubIcon}
        alt="github link"
        style={{ width: '25px' }}
        width={14}
      />
    </Link>
  )
}
