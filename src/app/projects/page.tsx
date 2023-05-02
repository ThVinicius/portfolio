import { IProject } from 'types/projects'

import { Card } from './card/Card'
import S from './projects.module.scss'

async function getProjects(): Promise<IProject[]> {
  const projects = await fetch(`${process.env.API_BASE_URL}/projects`)

  return await projects.json()
}

export default async function Projects() {
  const projects = await getProjects()

  return (
    <main className={S.container}>
      {projects.map(project => (
        <Card key={project.id} {...{ ...project }} />
      ))}
    </main>
  )
}
