import { IProject } from 'types/projects'

import { Card } from './card/Card'
import S from './projects.module.scss'

async function getProjects(): Promise<IProject[]> {
  const projects = await fetch('http://localhost:3000/projects/api')

  return await projects.json()
}

export default async function Projects() {
  const projects = await getProjects()

  return (
    <main className={S.container}>
      {projects.map(({ id, name, description, image, type, badges, links }) => (
        <Card
          key={id}
          {...{
            name,
            description,
            image,
            badges,
            type,
            links
          }}
        />
      ))}
    </main>
  )
}
