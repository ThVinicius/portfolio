import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import dev from '../../public/assets/images/dev.gif'
import S from './home.module.scss'

const Content: FC = () => {
  return (
    <main className={S.container}>
      <div className={S['container-text']}>
        <h2>Vinicius Pacheco dos Santos</h2>
        <h1>Desenvolvedor Web Full Stack</h1>
        <Link
          className={S.link}
          href="/assets/resume/Vinicius_Pacheco dos Santos_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={S.button}>Download CV</button>
        </Link>
        <Image
          src="https://skillicons.dev/icons?i=js,ts,react,nextjs,angular,nodejs,nestjs,java,spring&theme=light"
          alt="tecnologias"
          width={0}
          height={0}
          className={S['techs-images']}
        />
      </div>
      <div className={S.box}>
        <Image className={S.image} src={dev} alt="dev gif" />
      </div>
    </main>
  )
}

export default Content
