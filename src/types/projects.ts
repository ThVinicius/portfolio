export type IProject = {
  id: number
  name: string
  description: string
  image: string
  type: string
  badges: { name: string; image: string }[]
  links: { id: number; label: string; href: string }[]
}
