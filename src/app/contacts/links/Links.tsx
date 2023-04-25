import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import github from '../../../../public/assets/images/github-logo.png'
import linkedin from '../../../../public/assets/images/linkedin.png'
import S from './linksStyle.module.scss'

export const Links: FC = () => {
  return (
    <div className={S.container}>
      <div>
        <h1>Email</h1>
        <h2>vinicioss9955@gmail.com</h2>
      </div>
      <div>
        <h1>Linkedin e GitHub</h1>
        <span>
          <Link
            href="https://www.linkedin.com/in/thvinicius"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={linkedin} alt="linkedin logo" />
          </Link>
          <Link
            href="https://github.com/ThVinicius"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={github} alt="github logo" />
          </Link>
        </span>
      </div>
    </div>
  )
}
