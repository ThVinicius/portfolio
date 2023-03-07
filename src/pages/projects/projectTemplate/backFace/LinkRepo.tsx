import { FC } from 'react'
import { ILinkRepo } from '../../../../types/links'
import githubIcon from '../../../../assets/images/github.svg'
import { GithubBadge } from './backFaceStyle'

interface IProps {
  link: ILinkRepo
}

const LinkRepo: FC<IProps> = ({ link }) => {
  const key = Object.keys(link)[0]
  const value = Object.values(link)[0] as string

  return (
    <GithubBadge href={value} target="_blank">
      <p>{key}</p>
      <img src={githubIcon} alt="github link" style={{ width: '25px' }} />
    </GithubBadge>
  )
}

export default LinkRepo
